import { supabase } from "@/lib/supabase_client";

export async function createInfluencer(name, email) {
    const { data, error } = await supabase
        .from("influencers")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        .insert([{ name, email }])
        .select();

    return {data: data, success: error ? false : true, message: error ? error.message : "Influencer created successfully"}
}

export async function getInfluencers() {
    const { data, error } = await supabase
        .from("influencers")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export async function updateInfluencer(id, updates) {
    const { data, error } = await supabase
        .from("influencers")
        .update(updates)
        .eq("id", id)
        .select();

    if (error) throw error;
    return data;
}

export async function deleteInfluencer(id) {
    const { error } = await supabase
        .from("influencers")
        .delete()
        .eq("id", id);

    if (error) throw error;
    return true;
}

export async function get_best_influencers_match (n){
    const { data, error } = await supabase
    .from("influencers")
    .select("*")
    .order("created_at", { ascending: true })
    .limit(n);
    if (error) throw error;
    return data
}
