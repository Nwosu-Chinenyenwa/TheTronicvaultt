// app/api/verify-reset-code/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const { email, code } = await req.json();
    if (!email || !code) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ✅ Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    console.log("VERIFY email:", normalizedEmail);

    // ✅ Get latest VALID code (not used, not expired)
    const { data, error } = await supabase
      .from("password_resets")
      .select("*")
      .eq("email", normalizedEmail)
      .eq("used", false)
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) {
      console.error("DB error:", error);
      return NextResponse.json({ error: "DB error" }, { status: 500 });
    }

    console.log("VERIFY rows found:", data);

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No pending code found" },
        { status: 404 }
      );
    }

    const row = data[0];

    // ✅ Compare code
    const match = await bcrypt.compare(code, row.code_hash);
    if (!match) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }

    // ✅ Mark used ONLY after successful verification
    await supabase
      .from("password_resets")
      .update({ used: true })
      .eq("id", row.id);

    // Optional: find user id
    let userId = null;
    try {
      const { data: users } = await supabase.auth.admin.listUsers();
      if (users) {
        const found = users.find(u => u.email?.toLowerCase() === normalizedEmail);
        if (found) userId = found.id;
      }
    } catch (e) {
      console.warn("Could not list users:", e?.message);
    }

    // ✅ Issue short-lived reset token
    const token = jwt.sign(
      { email: normalizedEmail, resetId: row.id, userId },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    return NextResponse.json({ success: true, token });

  } catch (err) {
    console.error("verify-reset-code error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
