import { supabase } from "@/lib/supabase_client";

export async function createUser(name, email, password, user_type, brand_id, influencer_id) {
    const { data, error } = await supabase
        .from("users")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        .insert([{ name, email, password, user_type, brand_id, influencer_id }])
        .select();

    if (error) throw error;
    return {data: data, success: error ? false : true, message: error ? error.message : "User created successfully"};
}

export async function authUser(email, password) {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();
    return {data: data, error: error ? error : false}
}
export async function getUsers() {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export async function updateUser(id, updates) {
    const { data, error } = await supabase
        .from("users")
        .update(updates)
        .eq("id", id)
        .select();

    if (error) throw error;
    return data;
}

export async function deleteUser(id) {
    const { error } = await supabase
        .from("users")
        .delete()
        .eq("id", id);

    if (error) throw error;
    return true;
}

