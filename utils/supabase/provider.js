'use client';

import { createContext, useContext } from 'react';
import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase env variables!');
}

const client = createBrowserClient(supabaseUrl, supabaseAnonKey);
const SupabaseContext = createContext(client);

export function SupabaseProvider({ children }) {
  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => useContext(SupabaseContext);