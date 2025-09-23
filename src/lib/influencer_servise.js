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
    .insert({ influencer_id: influencer_id, title, currency: currency_id, price, delivery_from, delivery_to, icon, active}).select().single(); 
    // console.log({data, error});
    return {data: data, success: error ? false : true, message: error ? error.message : "Influencer servise added successfully"}
}

/**
 * takes array {influencer_service_id, name, count, price}
 * @returns {{ data, success, message}}
 */
export async function addNewInfluencerServiseLines (influencer_service_lines) {
    const {data, error} = await supabase.from("influencer_servise_line")
    .insert(influencer_service_lines).select();
    console.log({data, error});
    return {data: data, success: error ? false : true, message: error ? error.message : "Influencer servise line added successfully"}
}