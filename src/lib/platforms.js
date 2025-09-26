import { supabase } from "./supabase_client";

export async function getAllPlatforms(active=true) {
    let res = await supabase
        .from("platforms")
        .select(`   
            name,
            display_name,
            icon
        `)
        .eq("active", active)

    if (res.error) throw res.error
    else return res.data
}

