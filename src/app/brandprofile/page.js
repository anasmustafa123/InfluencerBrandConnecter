"use client";

import Image from "next/image";

export default function BrandProfilePage() {
  const brand = {
    name: "Acme Corp.",
    handle: "@acmecorp",
    bio: "Leading provider of innovative products for modern lifestyles. Partnering with top influencers and running creative campaigns.",
    avatar: "/brand-logo.png", // put an image in public/ or change to a URL
    products: [
      { id: 1, name: "Acme Smartwatch", desc: "Feature-rich wearable for fitness and productivity." },
      { id: 2, name: "Acme Wireless Earbuds", desc: "Crystal clear sound, all-day comfort." },
      { id: 3, name: "Acme Eco Bottle", desc: "Reusable, sustainable, stylish." },
    ],
    campaigns: [
      { id: 1, name: "#AcmeActive", desc: "Promoting healthy lifestyles with Acme products." },
      { id: 2, name: "#SoundOfAcme", desc: "Share your music moments with Acme Earbuds." },
    ],
    details: {
      founded: "2012",
      location: "San Francisco, CA",
      website: "https://acmecorp.com",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Home Button */}
      <div className="mb-4">
        <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
          </svg>
        </a>
      </div>
      <div className="mx-auto w-full max-w-5xl">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-pink-500 shadow">
                <Image
                  src={brand.avatar}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{brand.name}</h1>
                  <p className="text-sm text-gray-500">{brand.handle}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{brand.bio}</p>
              {/* Brand Details */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-500">Founded</div>
                  <div className="font-semibold text-gray-900">{brand.details.founded}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900">{brand.details.location}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Website</div>
                  <a href={brand.details.website} className="font-semibold text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">{brand.details.website}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brand.products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl p-4 border shadow-sm">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Campaigns */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Current Campaigns</h2>
          <div className="space-y-4">
            {brand.campaigns.map((camp) => (
              <div key={camp.id} className="bg-gray-50 rounded-xl p-4 border shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{camp.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{camp.desc}</p>
                </div>
                <a
                  href="/analyticsview"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-indigo-700 transition"
                >
                  Track Analytics
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v10.5m-5.25-7.5v7.5m-5.25-4.5v4.5" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
