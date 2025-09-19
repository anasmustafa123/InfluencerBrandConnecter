import { supabase } from "./supabase_client";

export async function uploadAvatar(userId, file, path_name) {
  // `file` is a File object from <input type="file" />
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}.${fileExt}`;
  const filePath = `${path_name}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, { upsert: true });

  if (error) {
    throw error;
  }

  // Get public URL
  const { publicUrl } = supabase
    .storage
    .from('avatars')
    .getPublicUrl(filePath);

  return publicUrl;
}
