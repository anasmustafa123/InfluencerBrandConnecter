import { ApifyClient } from "apify-client";
import HomePage from "./HomePage";
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken"

export default async function Page() {
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token') 
  
  // const apify_client = new ApifyClient({token: process.env.NEXT_PUBLIC_APIFY_TOKEN});
  // const input = {
  //   "usernames": [
  //       "anasmustafa"
  //   ]
  // };
  // const run = await apify_client.actor("dSCLg0C3YEZ83HzYX").call(input);
  // const items  = apify_client.dataset(run.defaultDatasetId).listItems();
  // items.forEach((item) => {
  //     console.dir(item);
  // });
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
    (isUser ? <HomePage isUser={isUser ? true : false} userRole={payload.userRole} /> : <HomePage isUser={false} userData={null} />)
  );
}
