import InfluencerProfilePage from "../influencerprofile";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getInfProfile } from "@/lib/profils/inf_profile";
import { getCurrencies } from "@/lib/general";
import { getAllInfluencerServises } from "@/lib/influencer_servise";
import { redirect } from "next/navigation";

export default async function page({params}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token') 
  let payload = {}
  try {
    if (isUser){
      payload = jwt.verify(isUser.value, process.env.NEXT_PUBLIC_JWT_SECRET)
    }
  } catch (err) {
    console.log(err);
    return (<></>)
  }
  
  const profile_info = await getInfProfile(id);
  if (! profile_info.success) {
    redirect("/home");
  }
  const currencies = await getCurrencies();
  const influencer_servises = await getAllInfluencerServises(parseInt(id));
  
  return (
    <InfluencerProfilePage 
      userId={payload.userId} 
      userRole={payload.userRole} 
      influencer_id={payload.influencer_id} 
      profile_data={profile_info.success ? profile_info.data[0] : null}
      currencies={currencies.data} 
      influencer_servises={influencer_servises.data} 
      isUsersProfile={payload.influencer_id === parseInt(id)}
    />
  );
}