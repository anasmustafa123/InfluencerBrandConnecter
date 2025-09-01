import { supabase } from "./supabase_client";

export async function getAllPackages (only_active) {
    let res = {}
    if (!only_active){
        res = await supabase
        .from("packages")
        .select(`   
            id,
            inf_num,
            title,
            price,
            days_duration,
            tag_line,
            region_id (label, color),
            package_platforms (platform_id, details),
            package_metrics (label, value)
        `)
        .order("view_order", { ascending: true });
    }

    if (res.error) throw res.error
    else return res.data
}

export async function getPackageById (id) {
    let res = await supabase
        .from("packages")
        .select(`
            id,
            inf_num,
            title,
            price,
            days_duration,
            tag_line,
            region_id (label, color),
            package_platforms (platform_id, details),
            package_metrics (label, value)
        `)
        .eq("id", id)
        .order("view_order", { ascending: true });
    if (res.error) throw res.error
    else return res.data
}
