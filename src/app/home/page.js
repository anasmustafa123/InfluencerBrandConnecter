import { ApifyClient } from "apify-client";
import HomePage from "./HomePage";
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken"

export default async function Page() {
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

  return (
    (isUser ? <HomePage isUser={isUser ? true : false} userRole={payload.userRole} brand_id={payload.brand_id} influencer_id={payload.influencer_id}/> : <HomePage isUser={false} userData={null} />)
  );
}
