import InfluencerProfilePage from "./influencerprofile";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getInfProfile } from "@/lib/profils/inf_profile";
import { redirect } from "next/navigation";

export default async function page({params}) {
  const { id } = await params;
  console.log({id})
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token') 
  let payload = {}
  const profile_info = await getInfProfile(id);
  console.log({profile_info})
  if (! profile_info.success) {
    redirect("/home");
  }
  try {
    console.log({isUser})
    if (isUser){
      payload = jwt.verify(isUser.value, process.env.NEXT_PUBLIC_JWT_SECRET)
    }
  } catch (err) {
    console.log(err);
    return (<></>)
  }
  
  console.log({profile_info});
  return (
    <InfluencerProfilePage userId={payload.userId} userRole={payload.userRole} influencer_id={payload.influencer_id} profile_data={profile_info.success ? profile_info.data[0] : null}/>
  );
}