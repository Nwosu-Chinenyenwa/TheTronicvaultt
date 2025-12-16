import { Resend } from "resend";
import WelcomeEmail from "@/lib/emails/WelcomeEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return Response.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    const html = await render(
      WelcomeEmail({
        name,
        email,
        dashboardUrl: "https://localhost:3000/shop",
      })
    );

    console.log("HTML type:", typeof html); 
    console.log("HTML length:", html.length);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to the Shop!",
      html, 
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({
      success: true,
      data,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}