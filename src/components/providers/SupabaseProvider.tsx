import { createClient } from '@supabase/supabase-js'
import { createServerClient, parse, serialize } from '@supabase/ssr'

export function createBrowserClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parse(document.cookie)
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            document.cookie = serialize(name, value, options)
          )
        },
      },
    }
  )
}