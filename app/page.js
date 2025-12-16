"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import Game from "./components/Game";
import Nav from "./components/Nav";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setload] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const loader = setTimeout(() => {
      setload(false);
    }, 1000);
    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    async function decide() {
      if (typeof window !== "undefined") {
        if (localStorage.getItem("spinner_played_v1") === "1") {
          route.push("/home");
          return;
        }
      }

      try {
        const supabase = createClient(true);
        const { data } = await supabase.auth.getSession();
        const user = data?.session?.user;

        if (user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("has_played")
            .eq("id", user.id)
            .single();

          if (profile?.has_played) {
            localStorage.setItem("spinner_played_v1", "1");
            route.push("/home");
            return;
          }

          const { data: wins } = await supabase
            .from("wins")
            .select("id")
            .eq("user_id", user.id)
            .limit(1);

          if (wins?.length) {
            localStorage.setItem("spinner_played_v1", "1");
            route.push("/home");
            return;
          }
        }
      } catch (err) {
        console.error("decide showGame error", err);
      }

      setShowGame(true);
    }

    decide();
  }, [route]);

  if (loading) {
    return (
      <section className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-center gap-10">
          <Image className="w-[40vw] lg:w-[20vw]" src={logo} alt="Logo" />
          <div className="w-[200px] h-1 rounded-full bg-black/20 overflow-hidden">
            <div className="h-full w-full bg-[#f28b00] animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
    {showGame && <Game />}
    </>
  );
}
