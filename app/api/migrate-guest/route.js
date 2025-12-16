// app/api/migrate-guest/route.js
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(req) {
  try {
    const body = await req.json();
    const guestId = body?.guestId;
    if (!guestId) return NextResponse.json({ error: "guestId required" }, { status: 400 });

    const cookieStore = cookies();

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (e) {
            console.error("cookie setAll error", e);
          }
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { error } = await supabase
      .from("wins")
      .update({ user_id: user.id, guest_id: null })
      .eq("guest_id", guestId);

    if (error) {
      console.error("migrate error", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await supabase.from("profiles").upsert({ id: user.id, has_played: true });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("migrate-guest exception", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
