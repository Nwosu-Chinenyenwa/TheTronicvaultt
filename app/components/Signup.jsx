"use client";
import { useState } from "react";
import { useSupabase } from "@/utils/supabase/provider";
import toast from "react-hot-toast";
import Loader from "./Loader";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = useSupabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Please fill in both fields.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: email.split("@")[0] } },
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }
    try {
      const username = email.split("@")[0] || "User";

      const res = await fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: username }),
      });

      const data = await res.json();
      console.log("Email response:", data);

      if (!res.ok) {
        console.error("Email API error:", data.error);
        throw new Error(data.error || "Failed to send email");
      }

      toast.success("Signup successfull! Check your inbox.");
    } catch (err) {
      console.error("Email error:", err);
      toast.error(err.message || "Email failed to send");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#fff] rounded-[8px] shadow-sm pt-10 pb-16 md:pt-[44px] md:pb-[50px] px-6 md:px-[50px] md:h-[500px] flex flex-col justify-between">
        <div>
          <div className="mb-[60px] md:mb-[97px] text-center">
            <h3 className="text-[20px] font-[400] text-[#2d2d2d]">Register</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-[22px]">
              <label className="block text-[#484848] mb-[12px]">
                Email address *
              </label>
              <input
                className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                type="email"
                placeholder="ali@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-[22px]">
              <label className="block text-[#484848] mb-[12px]">
                Password *
              </label>
              <input
                className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center md:justify-start mt-6 md:mt-0">
              <button
                type="submit"
                disabled={loading}
                className="h-[50px] cursor-pointer w-full md:w-auto text-[15px] font-[600] text-white px-[64px] rounded-full bg-[#484848] hover:bg-[#2d2d2d] transition-all"
              >
                {loading ? <Loader /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
