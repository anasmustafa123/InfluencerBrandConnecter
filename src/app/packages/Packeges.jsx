'use client';
import { useRouter } from 'next/navigation';
import {
    Users,
    Image,
    Globe,
    BarChart2,
    Clock,
    BadgeDollarSign,
  } from "lucide-react";
  import { useEffect } from 'react';
  import { getAllPackages } from '@/lib/package';
import { createNewDeal } from '@/lib/deals';
  
  export default function Packages({packages}) {
    const router = useRouter();
    console.log({packages})
    useEffect(
      () => {
        async function fetch_data() {
          let all_packages = await getAllPackages(false);
          console.log({all_packages})
          return all_packages
        } 
        fetch_data(false);
      }, []
    )
    
    return (
      <div className="py-10 px-4 max-w-7xl mx-auto relative min-h-screen bg-white">
        <div className="fixed top-6 left-6 z-50">
          <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
            </svg>
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Influencer Marketing Packages</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{pkg.title}</h2>
                <span className={`text-xs text-white px-3 py-1 rounded-full font-medium ${pkg.region_id.color}`}>
                  {pkg.region_id.label}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-4">{pkg.tagline}</div>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span>{pkg.inf_num}</span> infleuncers
                </li>
                <li className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-indigo-600" />
                  <span>{pkg.package_platforms.map(item => item.details).filter(item => item && item.trim().toLowerCase() !== "n/a").join(" + ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-600" />
                  <span>{pkg.package_platforms.map(item => item.platform_id).join(" + ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-indigo-600" />
                  <span>some link</span>
                </li>
              </ul>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart2 className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">Metrics</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {pkg.package_metrics.map((m) => (
                    <span key={m.label} className="bg-gray-100 rounded px-2 py-1">
                      <span className="font-semibold">{m.label}:</span> {m.value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">{pkg.days_duration}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <BadgeDollarSign className="w-4 h-4 text-indigo-600" />
                <span className="text-lg font-bold">Starts at {pkg.price} $</span>
              </div>
              <button
                className="mt-auto bg-indigo-600 text-white rounded-xl py-2 px-4 font-semibold hover:bg-indigo-700 transition"
                onClick={() => {
                  // Dummy influencers for demonstration; replace with real selection logic if needed
                  const influencers = [
                    { id: 1, name: "Sarah Johnson", profilePic: "https://randomuser.me/api/portraits/women/1.jpg", platform: "Instagram", milestones: ["Contacted", "Content Sent", "Published"], currentMilestone: 1 },
                    { id: 2, name: "Mike Smith", profilePic: "https://randomuser.me/api/portraits/men/1.jpg", platform: "TikTok", milestones: ["Contacted", "Content Sent", "Published"], currentMilestone: 0 },
                  ];
                  router.push(`/packagesetup?pkg=${encodeURIComponent(JSON.stringify(pkg))}&influencers=${encodeURIComponent(JSON.stringify(influencers))}`);
                }}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
