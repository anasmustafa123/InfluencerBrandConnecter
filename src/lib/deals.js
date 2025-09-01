import { supabase } from "./supabase_client";

export async function createNewDeal (package_id, brand_id){
    const {data, error} = await supabase.from("deals").insert({ package_id: package_id, brand_id: brand_id });

    if (error) {
        throw error
    }
    return data
}