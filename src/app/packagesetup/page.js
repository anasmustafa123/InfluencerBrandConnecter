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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 md:px-0">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Package Setup</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product to Advertise
            </label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter product name or description"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Advertisement Details
            </label>
            <textarea
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[80px]"
              placeholder="Describe how you want the influencer advertisement to be like..."
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Guidelines (optional)
            </label>
            <textarea
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[60px]"
              placeholder="Add any specific guidelines for the influencer..."
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Confirm Package
          </button>
        </form>
      </div>
    </div>
  );
}
