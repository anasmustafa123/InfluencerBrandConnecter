import { supabase } from "../supabase_client";


export async function addBrandProfile (brand_id) {
    const {data, error} = await supabase.from("brand_profile").
    insert({ brand_id: brand_id });
    return {data: data, success: error ? false : true, message: error ? error.message : "Profile added successfully"}
}


export async function getBrandProfile (brand_id) {
    const {data, error} = await supabase.from("brand_profile").
    select(`
        *, 
        influencers: brand_id (
            id
        )
    `).
    eq("brand_id", brand_id);
    return {data: data, success: error ? false : true, message: error ? error.message : "Profile added successfully"}
}