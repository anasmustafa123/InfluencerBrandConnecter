import BrandSetupForm from "./BrandSetupForm";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getBrandProfile } from "@/lib/profils/brand_profile";
import { redirect } from "next/navigation";

export default async function page() {
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token');
  let payload = {};
  
  try {
    if (isUser) {
      payload = jwt.verify(isUser.value, process.env.NEXT_PUBLIC_JWT_SECRET);
    }
  } catch (err) {
    console.log(err);
    redirect("/login");
  }

  // Ensure user is a brand
  if (payload.userRole !== "brand") {
    redirect("/home");
  }

  // Fetch existing brand profile data
  const brand_info = await getBrandProfile(payload.brand_id);
  
  return (
    <BrandSetupForm 
      brandData={brand_info.success ? brand_info.data[0] : null}
      userId={payload.userId}
      userRole={payload.userRole}
      brand_id={payload.brand_id}
    />
  );
}