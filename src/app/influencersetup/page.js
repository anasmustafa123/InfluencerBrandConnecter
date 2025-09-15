import { getAllPlatforms } from "@/lib/platforms";
import InfluencerSetupPage from "./influencersetup";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

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
  const platforms = await getAllPlatforms();
  console.log({platforms});
  return (
    <InfluencerSetupPage platforms={platforms} userRole={payload.userRole} brand_id={payload.brand_id} influencer_id={payload.influencer_id} />
  );
}