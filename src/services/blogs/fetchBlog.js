import { supabase } from "../supabase";

export async function getAllBlogs() {
  let { data: blogs, error } = await supabase.from("blogs").select();
  if (error) {
    console.error(error.message);
    throw new Error("There is an Error");
  }
  return null;
}