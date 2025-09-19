import { supabase } from "../supabase_client";

export async function addInfProfile (influencer_id) {
    const {data, error} = await supabase.from("influencer_profile").
    insert({ influencer_id: influencer_id });
    return {data: data, success: error ? false : true, message: error ? error.message : "Profile added successfully"}
}


export async function getInfProfile (influencer_id) {
    const {data, error} = await supabase.from("influencer_profile").
    select(`
        *,
        influencers: influencer_id (
            influencer_platforms (
            platforms (name, display_name, icon),
            user_name,
            url
        )
    )
    `).
    eq("influencer_id", influencer_id);
    return {data: data, success: error ? false : true, message: error ? error.message : "Profile found successfully"}
}


export async function updateProfileAvatar(userId, avatarUrl) {
    const { data, error } = await supabase
      .from('influencer_profile')
      .update({ avatar_url: avatarUrl })
      .eq('id', userId);
  
    if (error) throw error;
    return data;
  }
  