import { getAllPlatforms } from "@/lib/platforms";
import InfluencerSetupPage from "./influencersetup";

export default async function page() {
  const platforms = await getAllPlatforms();
  console.log({platforms});
  return (
    <InfluencerSetupPage platforms={platforms}/>
  );
}