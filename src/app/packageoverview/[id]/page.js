import { Suspense } from "react";
import { getPackageById } from "@/lib/package";
import { FaComments } from "react-icons/fa";
import { createNewDeal } from "@/lib/deals";

export default async function Page({ params }) {
  const { id: package_id} = await params;
  const pkg = await getPackageById(package_id);  
  createNewDeal(package_id, "1");
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
         <div className="absolute top-6 right-6 z-10">
        <a
          href="/home"
          className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow"
          aria-label="Go to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-indigo-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5"
            />
          </svg>
        </a>
      </div>
        
      <h1 className="text-3xl font-bold mb-6">
        {pkg.title} Package Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Package Overview</h2>
          <p className="text-gray-600 mb-2">
            <strong>Campaign Duration:</strong> {pkg.days_duration}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Number of Influencers:</strong>{" "}
            {pkg.inf_num}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Estimated Reach:</strong> 120K
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Views:</strong> 480K
          </p>
          <p className="text-gray-600">
            <strong>Conversions:</strong> 1,200
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Budget & Spending</h2>
          <p className="mb-2">
            <strong>Current Spend:</strong> $2,300 / $5,000
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{ width: "46%" }}
            ></div>
          </div>
          <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-indigo-700">
            See Breakdown
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Influencer Progress</h2>
        <div className="space-y-4">
          {influencers.map((inf) => (
            <div
              key={inf.id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={inf.profilePic}
                  alt={inf.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{inf.name}</p>
                  <p className="text-sm text-gray-500">{inf.platform}</p>
                </div>
              </div>

              <div className="flex-1 mx-6">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  {inf.milestones.map((m, i) => (
                    <span key={i}>{m}</span>
                  ))}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${((inf.currentMilestone + 1) /
                        inf.milestones.length) *
                        100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <button className="text-indigo-600 hover:text-indigo-800">
                <FaComments size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Content Provided</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-3">
            <div className="h-24 bg-gray-200 rounded mb-2"></div>
            <p className="text-sm font-medium">Instagram Reel</p>
            <p className="text-xs text-gray-500">Published</p>
          </div>
          <div className="border rounded-lg p-3">
            <div className="h-24 bg-gray-200 rounded mb-2"></div>
            <p className="text-sm font-medium">TikTok Video</p>
            <p className="text-xs text-gray-500">Scheduled</p>
          </div>
          <div className="border rounded-lg p-3">
            <div className="h-24 bg-gray-200 rounded mb-2"></div>
            <p className="text-sm font-medium">YouTube Short</p>
            <p className="text-xs text-gray-500">Draft</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-green-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-700">
          Track Analytics 📊
        </button>
      </div>
    </Suspense>
  )
}
