import { supabase } from "@/lib/supabase_client";

export async function GET(req) {  
  const { data, error } = await supabase
    .from("influencers")
    .update({ name: "Updated Name" })
    .eq("email", "johndoe@example.com")
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true, data }), { status: 200 });
}
