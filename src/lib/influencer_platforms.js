import { supabase } from "./supabase_client";

export async function AddInfluencerPlatforms (influencer_id, platform_id, username) {
    const {data, error} = await supabase.from("influencer_platforms")
    .insert({ influencer_id: influencer_id, platform_id: platform_id, user_name: username });
    return {data: data, success: error ? false : true, message: error ? error.message : "Platforms added successfully"}
}


export async function getAllInfluencerPlatforms (influencer_id) {
    const { data, error } = await supabase
        .from("influencer_platforms")
        .select("*").eq("influencer_id", influencer_id);
    return {data: data, success: error ? false : true, message: error ? error.message : "Influencer platforms found successfully"}
}