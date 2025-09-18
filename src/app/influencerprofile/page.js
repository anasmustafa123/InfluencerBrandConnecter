import InfluencerProfilePage from "./influencerprofile";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getInfProfile } from "@/lib/profils/inf_profile";

export default async function page() {
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token') 
  let payload = {}
  try {
    console.log({isUser})
    if (isUser){
      payload = jwt.verify(isUser.value, process.env.NEXT_PUBLIC_JWT_SECRET)
    }
  } catch (err) {
    console.log(err);
    return (<></>)
  }
  const profile_info = await getInfProfile(payload.influencer_id);
  console.log({profile_info});
  return (
    <InfluencerProfilePage userRole={payload.userRole} influencer_id={payload.influencer_id} profile_data={profile_info.success ? profile_info.data[0] : null}/>
  );
}