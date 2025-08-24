"use client";

import { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MarketingFilterPage() {
  const packages = [
    { id: 1, name: "Starter Package", desc: "Basic marketing for small brands" },
    { id: 2, name: "Growth Package", desc: "Advanced marketing for growing brands" },
    { id: 3, name: "Pro Package", desc: "Comprehensive marketing for established brands" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const campaignTiers = [
    { tier: "Bronze", price: "$500", features: ["1 campaign", "Basic analytics", "Standard support"] },
    { tier: "Silver", price: "$1200", features: ["3 campaigns", "Advanced analytics", "Priority support"] },
    { tier: "Gold", price: "$2500", features: ["Unlimited campaigns", "Full analytics suite", "Dedicated manager"] },
  ];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-6 py-8">
      {/* Search + Filter */}
      <div className="flex justify-center items-center gap-3 mb-10">
        {/* Home Button */}
        <Link href="/home" className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow flex items-center justify-center mr-2" aria-label="Go to Home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
          </svg>
        </Link>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search marketing packages..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <button className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md">
          <Filter size={20} />
        </button>
      </div>

      {/* Recommended Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Recommended Packages
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Card */}
          <div className="w-96 h-60 bg-white rounded-xl shadow-md border flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-lg font-bold text-gray-800">
              {packages[current].name}
            </h3>
            <p className="text-gray-500">{packages[current].desc}</p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </section>

      {/* All Packages Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          All Marketing Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="h-40 bg-white rounded-xl shadow-sm border flex flex-col items-center justify-center text-gray-600 hover:shadow-md transition"
            >
              <h3 className="font-semibold">{pkg.name}</h3>
              <p className="text-sm">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Packages Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-4">Campaign Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campaignTiers.map((tier) => (
            <div key={tier.tier} className="bg-pink-50 rounded-xl shadow p-6 flex flex-col items-start border border-pink-200">
              <h3 className="text-lg font-bold text-pink-700 mb-2">{tier.tier} Tier</h3>
              <div className="text-2xl font-extrabold text-pink-600 mb-2">{tier.price}</div>
              <ul className="mb-4 text-gray-700 list-disc pl-5">
                {tier.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="mt-auto px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">Select</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
