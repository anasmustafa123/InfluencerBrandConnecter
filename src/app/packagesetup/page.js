"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PackageSetup({ pkg, influencers }) {
  const router = useRouter();
  const [product, setProduct] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [guidelines, setGuidelines] = useState("");

  useEffect(() => {
    if (pkg && pkg.title) {
      setProduct(pkg.title);
    }
  }, [pkg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/packageoverview");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex items-center justify-center px-4 md:px-0 py-10">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-xl w-full border border-indigo-100">
        <h1 className="text-4xl font-extrabold mb-2 text-center text-indigo-700 tracking-tight drop-shadow-sm">
          Package Setup
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Set up your campaign details for the influencer collaboration
        </p>
        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Product to Advertise
            </label>
            <input
              type="text"
              className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50/50 placeholder-gray-400 text-base shadow-sm"
              placeholder="Enter product name or description"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Advertisement Details
            </label>
            <textarea
              className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50/50 placeholder-gray-400 text-base shadow-sm min-h-[90px]"
              placeholder="Describe how you want the influencer advertisement to be like..."
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Guidelines{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50/50 placeholder-gray-400 text-base shadow-sm min-h-[70px]"
              placeholder="Add any specific guidelines for the influencer..."
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-indigo-700 hover:to-pink-600 transition text-lg tracking-wide mt-2"
          >
            Confirm Package
          </button>
        </form>
      </div>
    </div>
  );
}
