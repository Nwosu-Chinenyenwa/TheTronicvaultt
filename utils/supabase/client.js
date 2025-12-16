import { createBrowserClient } from "@supabase/ssr";

export const createClient = (rememberMe) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase URL or Anon Key in environment variables");
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      storage: rememberMe ? localStorage : sessionStorage,
    },
  });
};

