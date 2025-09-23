import { supabase } from "./supabase_client";


export async function getAllInfluencerServises (influencer_id) {
    // console.log({influencer_id})
    const { data, error } = await supabase
        .from("influencer_servises")
        .select(`
            *,
            influencer_servise_line(*),
            currency(*)
        `).eq("influencer_id", influencer_id);

    return {data, success: error ? false : true, message: error ? error.message : "Influencer servises found successfully"};
}

export async function addNewInfluencerServise (influencer_id, title, currency_id, price, delivery_from, delivery_to, icon, active=true) {
    const {data, error} = await supabase.from("influencer_servises")
    .insert({ influencer_id: influencer_id, title, currency: currency_id, price, delivery_from, delivery_to, icon, active});
    console.log({data, error});
    return {data: data, success: error ? false : true, message: error ? error.message : "Influencer servise added successfully"}
}