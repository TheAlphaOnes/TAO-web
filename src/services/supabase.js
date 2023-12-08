import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://emciwxngjwfxyuwdxheb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY2l3eG5nandmeHl1d2R4aGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNTQ4MTYsImV4cCI6MjAxNzYzMDgxNn0.qRT6BwstY-MmZWJMewqaN89PEGcEC-FmfFuP9wWxpKk"
);
