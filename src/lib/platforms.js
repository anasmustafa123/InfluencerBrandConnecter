import { supabase } from "./supabase_client";

export async function getAllPlatforms() {
    let res = await supabase
        .from("platforms")
        .select(`   
            name,
            display_name
        `)
        .eq("active", true)

    if (res.error) throw res.error
    else return res.data
}