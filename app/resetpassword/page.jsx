"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params?.get("token");
  const [valid, setValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setValid(false);
      return;
    }
    
    (async () => {
      try {
        const res = await fetch("/api/validate-reset-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Invalid token");
        setValid(true);
      } catch (e) {
        console.error("Token validation error:", e);
        setValid(false);
      }
    })();
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    setErrorDetails(null);

    if (password.length < 8) {
      setStatus("Password must be at least 8 characters");
      return;
    }
    if (password !== confirm) {
      setStatus("Passwords do not match");
      return;
    }

    // Simple password validation (less strict for testing)
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      setStatus("Password must contain uppercase, lowercase, and number");
      return;
    }

    setLoading(true);
    setStatus("Resetting password...");

    try {
      console.log("Sending request with token:", token);
      console.log("Password meets complexity requirements");
      
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const json = await res.json();
      console.log("Response:", json);
      
      if (!res.ok) {
        setErrorDetails(json.details || json.error);
        throw new Error(json.error || "Failed to reset password");
      }

      setStatus("Password updated! Redirecting to login...");
      setTimeout(() => router.push("/Login"), 1200);
    } catch (err) {
      console.error("Reset error:", err);
      setStatus(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  }

  if (valid === null) return <p>Checking token…</p>;
  if (!valid) {
    if (typeof window !== "undefined") {
      setTimeout(() => router.push("/ForgotPassword"), 800);
    }
    return <p>Invalid or expired token. Redirecting…</p>;
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", padding: "20px" }}>
      <h1>Set a new password</h1>
      
      <div style={{ 
        backgroundColor: "#f0f0f0", 
        padding: "10px", 
        marginBottom: "20px",
        borderRadius: "5px" 
      }}>
        <p><strong>Password Requirements:</strong></p>
        <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
          <li>At least 8 characters</li>
          <li>At least one uppercase letter (A-Z)</li>
          <li>At least one lowercase letter (a-z)</li>
          <li>At least one number (0-9)</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            New password
          </label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            style={{ 
              width: "100%", 
              padding: "8px",
              boxSizing: "border-box" 
            }}
            placeholder="Enter new password"
          />
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Confirm password
          </label>
          <input
            required
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            disabled={loading}
            style={{ 
              width: "100%", 
              padding: "8px",
              boxSizing: "border-box" 
            }}
            placeholder="Confirm new password"
          />
        </div>
        
        <div style={{ marginTop: "12px" }}>
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: "10px 20px",
              backgroundColor: loading ? "#ccc" : "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Resetting..." : "Reset password"}
          </button>
        </div>
      </form>
      
      {status && (
        <div style={{ 
          marginTop: "20px",
          padding: "10px",
          backgroundColor: status.includes("Failed") || status.includes("Invalid") ? "#ffe6e6" : "#e6ffe6",
          borderRadius: "5px",
          color: status.includes("Failed") || status.includes("Invalid") ? "#d00" : "#090"
        }}>
          <p><strong>{status}</strong></p>
          {errorDetails && (
            <div style={{ 
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ccc"
            }}>
              <p><strong>Error Details:</strong></p>
              <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
                {JSON.stringify(errorDetails, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}