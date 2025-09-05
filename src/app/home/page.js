import HomePage from "./HomePage";
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies();
  const isUser = cookieStore.get('token')
  console.log({cookieStore: cookieStore.get('token')});
  return (
    <HomePage isUser={isUser}/>
  );
}
