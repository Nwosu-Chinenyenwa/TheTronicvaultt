"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { loginSchema } from "@/lib/utils/validation";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import Login from "../components/Login";
import Signup from "../components/Signup";
import FooterCard from "../components/FooterCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import arrow from "../../public/images/arrow-right.png";
import Image from "next/image";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const supabase = createClient(true);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
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
      window.location.href = "myaccount"
    }

    setLoading(false);
  };
  return (
    <>
      <Header />

      <div className="border-b border-[#00000022] py-3">
        <div className="flex items-center gap-5 ml-[19px] text-sm md:text-base">
          <h2 className="font-[500] text-[#8c8c8c] cursor-pointer hover:text-[#f28b00] transition-all">
            Home
          </h2>
          <Image
            src={arrow}
            alt="arrow right"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <h2 className="font-[500] text-[#8c8c8c]">Accounts</h2>
        </div>
      </div>

      <main className="bg-[#f5f5f5] flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16">
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
                    type="email"
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
                    placeholder="*******"
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
                  <h3 className="text-[#aaaaaa] text-[14px] cursor-pointer hover:text-[#f28b00] transition-all">
                    Lost your Password?
                  </h3>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
