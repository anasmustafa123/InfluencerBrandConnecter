import { Suspense } from "react";
import { getPackageById } from "@/lib/package";
import { createNewDeal } from "@/lib/deals";
import PackageOverview from "../Packageoverview";

export default async function Page({ params }) {
  const { id: package_id} = await params;
  const pkg = await getPackageById(package_id);  
  const influencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      platform: "Instagram",
      profilePic: "https://i.pravatar.cc/50?img=1",
      milestones: ["Draft", "Posted", "Reviewed"],
      currentMilestone: 1, // 0 = Draft, 1 = Posted, 2 = Reviewed
    },
    {
      id: 2,
      name: "Mark Lee",
      platform: "TikTok",
      profilePic: "https://i.pravatar.cc/50?img=2",
      milestones: ["Draft", "Posted", "Reviewed"],
      currentMilestone: 0,
    },
    {
      id: 3,
      name: "Aisha Khan",
      platform: "YouTube",
      profilePic: "https://i.pravatar.cc/50?img=3",
      milestones: ["Draft", "Posted", "Reviewed"],
      currentMilestone: 2,
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PackageOverview pkg={pkg} influencers={influencers} />
    </Suspense>
  )
}
