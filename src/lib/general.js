import { supabase } from "./supabase_client";


export async function getCurrencies(){
    const { data, error } = await supabase
        .from("currency")
        .select("*");

    return {data, success: error ? false : true, message: error ? error.message : "Currencies found successfully"};
}



