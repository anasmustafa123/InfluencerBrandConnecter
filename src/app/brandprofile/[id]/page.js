import { getBrandProfile } from "@/lib/profils/brand_profile";
import BrandProfilePage from "./BrandProfilePage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export default async function page(params) {
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
  const brand_info = await getBrandProfile(parseInt(id));
  console.log({brand_info});
  if (! brand_info.success) {
    redirect("/home");
  }
  return (
    <BrandProfilePage 
      userId={payload.userId} 
      userRole={payload.userRole} 
      brand_id={payload.brand_id} 
      profile_data={brand_info.success ? brand_info.data[0] : null}
      isUsersBrandProfile={true}
    />
  )
}
