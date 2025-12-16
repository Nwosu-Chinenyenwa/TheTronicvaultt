"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { loginSchema } from "@/lib/utils/validation";
import toast from "react-hot-toast";
import Loader from "./Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const supabase = createClient(true);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        window.location.href = "/home";
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      setLoading(false);
      return;
    }

    const supabase = createClient(rememberMe);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged in!");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md md:mb-0 mx-auto">
      <div className="bg-[#fff] rounded-[8px] shadow-sm pt-10 pb-16 md:pt-[44px] md:pb-[50px] px-6 md:px-[50px] md:h-[500px] flex flex-col justify-between">
        <div>
          <div className="mb-[60px] md:mb-[97px] text-center">
            <h3 className="text-[20px] font-[400] text-[#2d2d2d]">Login</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-[22px]">
              <label className="block text-[#484848] mb-[12px]">
                Username or email address *
              </label>
              <input
                className="w-full h-[40px] placeholder:text-[#727272] text-[#727272] rounded-[20px] border-2 border-[#e5e5e5] outline-none text-[13px] hover:border-[#cacaca] px-[30px]"
                type="text"
                placeholder="Ali"
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

            <div className="flex items-center gap-2 text-[16px] text-[#484848] mt-[25px] mb-[21px]">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#f59e0b] cursor-pointer"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
              <button
                type="submit"
                disabled={loading}
                className="h-[50px] w-full md:w-auto cursor-pointer text-[15px] font-[600] text-white px-[64px] rounded-full bg-[#f92400] hover:bg-[#d81e00] transition-all"
              >
                {loading ? <Loader /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
