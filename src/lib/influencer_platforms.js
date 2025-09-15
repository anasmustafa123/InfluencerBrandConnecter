import { supabase } from "./supabase_client";

export async function AddInfluencerPlatforms (influencer_id, platform_id, username) {
    const {data, error} = await supabase.from("influencer_platforms")
    .insert({ influencer_id: influencer_id, platform_id: platform_id, user_name: username });
    return {data: data, success: error ? false : true, message: error ? error.message : "Platforms added successfully"}
}
