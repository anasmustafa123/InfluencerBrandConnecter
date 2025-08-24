"use client";


import Image from "next/image";
import { useState } from "react";

export default function BrandProfilePage() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", desc: "" });
  const [newCampaign, setNewCampaign] = useState({ name: "", desc: "" });
  const [products, setProducts] = useState([
    { id: 1, name: "Acme Smartwatch", desc: "Feature-rich wearable for fitness and productivity." },
    { id: 2, name: "Acme Wireless Earbuds", desc: "Crystal clear sound, all-day comfort." },
    { id: 3, name: "Acme Eco Bottle", desc: "Reusable, sustainable, stylish." },
  ]);
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "#AcmeActive", desc: "Promoting healthy lifestyles with Acme products." },
    { id: 2, name: "#SoundOfAcme", desc: "Share your music moments with Acme Earbuds." },
  ]);
  const brand = {
    name: "Acme Corp.",
    handle: "@acmecorp",
    bio: "Leading provider of innovative products for modern lifestyles. Partnering with top influencers and running creative campaigns.",
    avatar: "/brand-logo.png",
    details: {
      founded: "2012",
      location: "San Francisco, CA",
      website: "https://acmecorp.com",
    },
  };

  function handleAddProduct(e) {
    e.preventDefault();
    setProducts(prev => [
      ...prev,
      { id: Date.now(), name: newProduct.name, desc: newProduct.desc }
    ]);
    setNewProduct({ name: "", desc: "" });
    setShowProductModal(false);
  }

  function handleRemoveProduct(id) {
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  function handleAddCampaign(e) {
    e.preventDefault();
    setCampaigns(prev => [
      ...prev,
      { id: Date.now(), name: newCampaign.name, desc: newCampaign.desc }
    ]);
    setNewCampaign({ name: "", desc: "" });
    setShowCampaignModal(false);
  }

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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Products</h2>
            <button
              aria-label="Add Product"
              className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 shadow"
              onClick={() => setShowProductModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl p-4 border shadow-sm relative group">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
                <button
                  aria-label="Remove Product"
                  className="absolute top-2 right-2 p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 opacity-0 group-hover:opacity-100 transition"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Product Modal */}
        {showProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative border border-indigo-100">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setShowProductModal(false)}>&times;</button>
              <h3 className="text-lg font-bold mb-4">Add Product</h3>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <input type="text" className="w-full border rounded p-2" placeholder="Product Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required />
                <textarea className="w-full border rounded p-2" placeholder="Description" value={newProduct.desc} onChange={e => setNewProduct({ ...newProduct, desc: e.target.value })} required />
                <div className="flex justify-end gap-2">
                  <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={() => setShowProductModal(false)}>Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Add</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Campaigns */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Current Campaigns</h2>
            <a
              aria-label="Add Campaign"
              className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 shadow"
              href="/marketingfilter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </a>
          </div>
          <div className="space-y-4">
            {campaigns.map((camp) => (
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
        {/* Campaign Modal */}
  {/* No campaign modal, plus now links to marketingfilter */}
      </div>
    </div>
  );
}
