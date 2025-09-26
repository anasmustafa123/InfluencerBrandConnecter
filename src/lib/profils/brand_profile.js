import { supabase } from "../supabase_client";


export async function addBrandProfile (brand_id) {
    const {data, error} = await supabase.from("brand_profile").
    insert({ brand_id: brand_id });
    return {data: data, success: !error, message: error ? error.message : "Profile added successfully"}
}


export async function getBrandProfile (brand_id) {
    const {data, error} = await supabase.from("brand_profile").
    select(`
        *, 
        brands: brand_id (
            id
        )
    `).
    eq("brand_id", brand_id);
    return {data: data, success: !error, message: error ? error.message : "Profile found successfully"}
}

export async function updateBrandProfileData(brand_id, name, tag, header_info, founded, location , website_url, about) {
    const {data, error} = await supabase.from("brand_profile").
    update({ 
        name: name,
        tag: tag,
        header_info: header_info,
        founded: founded,
        location: location,
        website_url: website_url,
        about: about
    }).
    eq("brand_id", brand_id);
    return {data: data, success: !error, message: error ? error.message : "Profile updated successfully"}
}

export async function completeBrandSetup(brand_id, setupData) {
    const {data, error} = await supabase.from("brand_profile").
    update({ 
        name: setupData.brandName,
        tag: setupData.brandBio, // Using tag field for bio
        header_info: setupData.brandBio, // Using header_info for bio as well
        location: setupData.region,
        website_url: setupData.website,
        contact_email: setupData.contactEmail,
        contact_phone: setupData.contactPhone,
        setup_completed: true
    }).
    eq("brand_id", brand_id);
    return {data: data, success: !error, message: error ? error.message : "Setup completed successfully"}
}