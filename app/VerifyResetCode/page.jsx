// app/VerifyResetCode/page.jsx
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyResetCodePage() {
  const params = useSearchParams();
  const emailFromQuery = params?.get("email") || "";
  const [email, setEmail] = useState(emailFromQuery);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Verifying...");
    try {
      const res = await fetch("/api/verify-reset-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Invalid");
      const { token } = json;
      // redirect to ResetPassword page with token in query (this token is short-lived)
      window.location.href = `/ResetPassword?token=${encodeURIComponent(token)}`;
    } catch (err) {
      setStatus(err.message || "Invalid code");
    }
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h1>Enter your code</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          Code
          <input required value={code} onChange={(e) => setCode(e.target.value)} type="text" />
        </label>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Verify code</button>
        </div>
      </form>
      <p>{status}</p>
    </div>
  );
}
