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
  const testpackages = [
    {
      title: "Starter",
      id: 1,
      tagline: "Best for local testing in a single market",
      numberOfInfluencers: 1,
      instaContent: "1 Instagram post",
      tiktokContent: "N/A",
      youtubeContent: "N/A",
      otherContent: "2 IG stories",
      platform: "Instagram only",
      linkInBioTime: "Link in bio → 3 days",
      metrics: [
        { label: "Reach", value: "10k–30k" },
        { label: "Views", value: "~5k–10k" },
        { label: "Conversions", value: "~50–150" },
      ],
      region: { label: "Local", color: "bg-green-500" },
      duration: "1 week",
      price: "$499",
    },
    {
      title: "Growth",
      id: 2,
      tagline: "Expand regionally with more influencers & platforms",
      numberOfInfluencers: 4,
      instaContent: "2 IG posts",
      tiktokContent: "1 TikTok",
      youtubeContent: "N/A",
      otherContent: "4 IG stories",
      platform: "Instagram + TikTok",
      linkInBioTime: "Link in bio → 1 week",
      metrics: [
        { label: "Reach", value: "50k–150k" },
        { label: "Views", value: "~20k–50k" },
        { label: "Conversions", value: "~200–500" },
      ],
      region: { label: "Regional", color: "bg-blue-500" },
      duration: "2–3 weeks",
      price: "$999",
    },
    {
      title: "Premium",
      id: 3,
      tagline: "Perfect for multi-country campaigns with strong brand push",
      numberOfInfluencers: 6,
      instaContent: "3 IG posts",
      tiktokContent: "2 TikToks",
      youtubeContent: "1 YouTube Shorts",
      otherContent: "6 IG stories",
      platform: "Instagram + TikTok + YouTube Shorts",
      linkInBioTime: "Link in bio → 2 weeks",
      metrics: [
        { label: "Reach", value: "200k–500k" },
        { label: "Views", value: "~100k–250k" },
        { label: "Conversions", value: "~800–1,500" },
      ],
      region: { label: "Multi-country", color: "bg-purple-500" },
      duration: "1–2 months",
      price: "$2499",
    },
    {
      title: "Elite",
      id: 4,
      tagline: "For global launches and maximum exposure",
      numberOfInfluencers: 10,
      instaContent: "5 IG posts",
      tiktokContent: "3 TikToks",
      youtubeContent: "2 YouTube videos",
      otherContent: "10 IG stories + optional blogs",
      platform: "Instagram + TikTok + YouTube + optional X/Twitter",
      linkInBioTime: "Link in bio → 1 month",
      metrics: [
        { label: "Reach", value: "1M–3M" },
        { label: "Views", value: "~500k–1M" },
        { label: "Conversions", value: "~5,000–15,000" },
      ],
      region: { label: "Global", color: "bg-yellow-400" },
      duration: "3 months",
      price: "$4999",
    },
  ];

  
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
        {/* Home Button */}
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
              <button className="mt-auto bg-indigo-600 text-white rounded-xl py-2 px-4 font-semibold hover:bg-indigo-700 transition" 
                onClick={() => router.push("/packagesetup")}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
