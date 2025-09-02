"use client";
import PackageOverview from "./Packageoverview";

// Dummy data for demonstration; replace with global state or context as needed
const dummyPkg = {
  title: "Starter",
  days_duration: "1 week",
  inf_num: 2,
};
const dummyInfluencers = [
  { id: 1, name: "Sarah Johnson", profilePic: "https://randomuser.me/api/portraits/women/1.jpg", platform: "Instagram", milestones: ["Contacted", "Content Sent", "Published"], currentMilestone: 1 },
  { id: 2, name: "Mike Smith", profilePic: "https://randomuser.me/api/portraits/men/1.jpg", platform: "TikTok", milestones: ["Contacted", "Content Sent", "Published"], currentMilestone: 0 },
];

export default function Page() {
  return <PackageOverview pkg={dummyPkg} influencers={dummyInfluencers} />;
}
