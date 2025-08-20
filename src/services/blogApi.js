import { supabase } from "../lib/supabaseClient";

const TABLE = "posts";

export async function listPosts() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getPost(slug) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) throw error;
  return data;
}

export async function upsertPostApi(payload) {
  const { data, error } = await supabase
    .from(TABLE)
    .upsert(payload, { onConflict: "slug" })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deletePostApi(slug) {
  const { error } = await supabase.from(TABLE).delete().eq("slug", slug);
  if (error) throw error;
}
