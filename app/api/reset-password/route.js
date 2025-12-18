// app/api/reset-password/route.js
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import jwt from "jsonwebtoken";

const resetPasswordSchema = z.object({
  token: z.string().min(1, { message: "Token is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: "Password must contain uppercase, lowercase, and number",
    }),
});

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    // Validate input
    const validationResult = resetPasswordSchema.safeParse({ token, password });
    if (!validationResult.success) {
      const errorMessage =
        validationResult.error.errors?.[0]?.message || "Invalid input";
      return Response.json({ error: errorMessage }, { status: 400 });
    }

    const supabase = createClient();

    // After validating the JWT (move validation here or reuse)
    const payload = jwt.verify(token, process.env.JWT_SECRET); // throws if invalid/expired

    const { data: resetToken, error: tokenError } = await supabase
      .from("password_reset_tokens")
      .select("user_id")
      .eq("id", payload.resetId) // assuming you have an 'id' UUID column
      .eq("used", false)
      .gt("expires_at", new Date().toISOString())
      .single();

    if (tokenError || !resetToken) {
      console.error("Token error:", tokenError);
      return Response.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Mark token as used FIRST
    await supabase
      .from("password_reset_tokens")
      .update({ used: true })
      .eq("token", token);

    // Get the service role client for admin operations
    // IMPORTANT: This requires SUPABASE_SERVICE_ROLE_KEY in .env.local
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY, // NOT the anon key!
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Update password using Admin API with service role
    const { error: updateError } =
      await supabaseAdmin.auth.admin.updateUserById(resetToken.user_id, {
        password: password,
      });

    if (updateError) {
      console.error("Password update error:", updateError);
      return Response.json(
        { error: updateError.message || "Failed to reset password" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
