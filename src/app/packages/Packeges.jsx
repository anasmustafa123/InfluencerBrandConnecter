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
  
  export default function Packages({packages}) {
    const router = useRouter();
    return (
      <div className="py-10 px-4 max-w-7xl mx-auto relative min-h-screen bg-white">
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow"
            aria-label="Go Back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="fixed top-6 right-6 z-50">
          <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
            </svg>
          </a>
        </div>
        <h1 className="text-3xl font-extrabold mb-10 text-center text-indigo-700 tracking-tight drop-shadow-sm">Influencer Marketing Packages</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-indigo-200 transition-shadow p-12 min-h-[480px] flex flex-col border border-indigo-100 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-200 via-pink-100 to-white rounded-full opacity-40 group-hover:scale-110 transition-transform z-0" />
              <div className="flex items-center justify-between mb-2 z-10 relative">
                <h2 className="text-2xl font-bold text-indigo-700">{pkg.title}</h2>
                <span className={`text-xs text-white px-3 py-1 rounded-full font-medium ${pkg.region_id.color} shadow`}>{pkg.region_id.label}</span>
              </div>
              <div className="text-base text-gray-500 mb-4 z-10 relative">{pkg.tagline}</div>
              <ul className="mb-4 space-y-2 z-10 relative">
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-gray-700">{pkg.inf_num}</span> influencers
                </li>
                <li className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-pink-500" />
                  <span>{pkg.package_platforms.map(item => item.details).filter(item => item && item.trim().toLowerCase() !== "n/a").join(" + ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span>{pkg.package_platforms.map(item => item.platform_id).join(" + ")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-yellow-500" />
                  <span>some link</span>
                </li>
              </ul>
              <div className=" z-10 relative">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart2 className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">Metrics</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {pkg.package_metrics.map((m) => (
                    <span key={m.label} className="bg-indigo-50 text-indigo-700 rounded px-2 py-1 font-semibold">
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>
              </div>
                <div className="flex flex-col flex-grow z-10 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">{pkg.days_duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <BadgeDollarSign className="w-4 h-4 text-indigo-600" />
                    <span className="text-lg font-bold text-indigo-700 pb-2">Starts at {pkg.price} $</span>
                  </div>
                </div>
              <button
                className="mt-auto bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-xl py-3 px-4 font-bold shadow-lg hover:from-indigo-700 hover:to-pink-600 transition text-base tracking-wide z-10 relative"
                onClick={() => {
                  router.push(`/packagesetup/${pkg.id}`);
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
