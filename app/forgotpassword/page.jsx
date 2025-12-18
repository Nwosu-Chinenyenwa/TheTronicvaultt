// app/ForgotPassword/page.jsx
"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Error");
      setStatus("Code sent — check your email");
      // redirect to verify page (so they can paste code)
      window.location.href = `/VerifyResetCode?email=${encodeURIComponent(email)}`;
    } catch (err) {
      setStatus(err.message || "Failed");
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h1>Forgot password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
          />
        </label>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Send reset code</button>
        </div>
      </form>
      <p>{status}</p>
    </div>
  );
}
