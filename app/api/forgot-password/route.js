// app/api/forgot-password/route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6-digit
}

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email)
      return NextResponse.json({ error: "Email required" }, { status: 400 });

    // Optional: check if a user with that email exists in your auth or profiles table.
    // If you use a 'profiles' table with email, check it; otherwise you may skip this check.
    // Example check (uncomment if you have a profiles table):
    // const { data: profile } = await supabase.from('profiles').select('id').eq('email', email).single();
    // if (!profile) return NextResponse.json({ error: 'No account with that email' }, { status: 404 });

    const code = generateCode();
    const codeHash = await bcrypt.hash(code, 10);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // 15 minutes

    // Insert into table
    await supabase.from("password_resets").insert({
      email,
      code_hash: codeHash,
      expires_at: expiresAt,
      used: false,
    });

    // Build a simple HTML email with code (you can adapt to @react-email templates)
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial;line-height:1.4">
        <h2>Reset code</h2>
        <p>Your password reset verification code is:</p>
        <p style="font-size:22px;font-weight:700">${code}</p>
        <p>This code expires in 15 minutes. If you didn't request this, ignore this email.</p>
      </div>
    `;

    // send with Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your password reset code",
      html,
    });

    return NextResponse.json({ success: true, message: "Code sent" });
  } catch (err) {
    console.error("forgot-password error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
