"use client";

import { uploadAvatar } from "@/lib/avatars";
import { updateBrandProfileData } from "@/lib/profils/brand_profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSave, FaEdit } from "react-icons/fa";

export default function BrandProfilePage(props) {
  const router = useRouter();
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

  // Edit mode state management
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [avatar, setAvatar] = useState(props.profile_data && props.profile_data.avatar_url ? props.profile_data.avatar_url : "/brand-logo.png");
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: props.profile_data?.name,
    tag: props.profile_data?.tag,
    header_info: props.profile_data?.header_info,
    sidebar_about: props.profile_data?.sidebar_about,
    details: {
      founded: props.profile_data?.founded,
      location: props.profile_data?.location,
      website_url: props.profile_data?.website_url,
    },
  });

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setShowConfirm(true); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-10 px-4">
      <div className="pt-16 px-4 md:px-8">
        <div className="w-full mx-auto flex justify-between max-w-5xl">
        <div className="mb-4 flex gap-2 justify-start w-fit">
          <button
            onClick={() => router.back()}
            className="text-center text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition"
            aria-label="Go to Previous Page"
          >
            <FaArrowLeft />
          </button>
          <a
            href="/home"
            className="inline-flex text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition"
            aria-label="Go to Home"
          >
            <IoHomeOutline />
          </a>
        </div>
        <div className="flex gap-2 justify-start w-fit">
          <a
              href="#"
              className={`mb-4 ${props.userRole === "brand" && props.isUsersBrandProfile && hasChanges ? "inline-flex" : "hidden"} text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition`}
              aria-label="save changes"
              onClick={async() => {
                console.log({profileData, avatar})
                const res = await updateBrandProfileData(
                  props.brand_id, 
                  profileData.name, 
                  profileData.tag, 
                  profileData.header_info, 
                  profileData.sidebar_about, 
                  avatar, 
                  profileData.details.founded, 
                  profileData.details.location, 
                  profileData.details.website_url
                );
                console.log({res})
                if (!res.success) {
                  alert(res.message);
                  return;
                }
                setHasChanges(false);
                setIsEditing(false);
              }}
            >
              <FaSave />
          </a>
          <a
              href="#"
              className={`mb-4 ${props.userRole === "brand" && props.isUsersBrandProfile ? "inline-flex" : "hidden"} text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition`}
              aria-label="edit profile"
              onClick={() => {
                setIsEditing((s)=>(!s))
              }}
            >
              <FaEdit />
          </a>
        </div>
      </div>
        <div className="mx-auto w-full max-w-5xl">
          {/* Header card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-indigo-100 mb-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 via-pink-100 to-white rounded-full opacity-40 z-0" />
            <div className="flex flex-col md:flex-row md:items-center gap-6 z-10 relative">
              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-pink-500 shadow">
                  <Image
                    src={preview || avatar}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 768px) 128px, 144px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {
                  props.userRole === "brand" && props.isUsersBrandProfile && (
                    <div className=" mt-3 flex items-center gap-3">
                      <label className="cursor-pointer text-sm text-indigo-600 font-medium hover:underline">
                        Change Photo
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>
                  )
                }
              </div>
              {showConfirm && selectedFile && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                  <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full flex flex-col items-center gap-4">
                    <h2 className="text-lg font-bold text-gray-900">Confirm Brand Logo</h2>
                    <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-pink-500">
                      <Image
                        src={preview}
                        alt="Preview"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button
                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600"
                        onClick={async () => {
                          try {
                            const url = await uploadAvatar(props.userId, selectedFile, "profile/brand");
                            console.log({url});
                            setHasChanges(true);
                            setAvatar(url);
                            setShowConfirm(false);
                          } catch (err) {
                            console.error(err);
                            alert("Upload failed");
                          }
                        }}
                      >
                        Confirm
                      </button>
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100"
                        onClick={() => {
                          setPreview(avatar);
                          setSelectedFile(null);
                          setShowConfirm(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={profileData.name} 
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-2 transition-all duration-200 shadow-lg"
                        onChange={(e) => {
                          setHasChanges(true);
                          setProfileData((prev) => ({...prev, name: e.target.value}));
                        }}
                        placeholder="Enter brand name"
                      />
                    ) : (
                      <h1 className="text-3xl font-extrabold text-indigo-700 mb-1">{profileData.name}</h1>
                    )}
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={profileData.tag} 
                        className="text-base text-indigo-600 font-semibold bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-1 mt-1 transition-all duration-200 shadow-md"
                        onChange={(e) => {
                          setProfileData((prev) => ({...prev, tag: e.target.value}));
                          setHasChanges(true);
                        }}
                        placeholder="Enter brand Tag"
                      />
                    ) : (
                      <p className="text-sm text-gray-500">{profileData.tag}</p>
                    )}
                  </div>
                </div>
                {isEditing ? (
                  <textarea 
                    value={profileData.header_info} 
                    className="mt-4 w-full text-gray-700 text-lg italic bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 transition-all duration-200 shadow-lg resize-none"
                    onChange={(e) => {
                      setProfileData((prev) => ({...prev, header_info: e.target.value}));
                      setHasChanges(true);
                    }}
                    placeholder="Enter brand Info"
                    rows="2"
                  />
                ) : (
                  <p className="mt-4 text-gray-700 text-base">{profileData.header_info}</p>
                )}
                {/* Brand Details */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500">Founded</div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={profileData.details.founded} 
                        className="font-semibold text-gray-900 bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-1 transition-all duration-200 shadow-md text-sm"
                        onChange={(e) => {
                          setProfileData((prev) => ({...prev, details: {...prev.details, founded: e.target.value}}));
                          setHasChanges(true);
                        }}
                        placeholder="Founded year"
                      />
                    ) : (
                      <div className="font-semibold text-gray-900">{profileData.details.founded}</div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={profileData.details.location} 
                        className="font-semibold text-gray-900 bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-1 transition-all duration-200 shadow-md text-sm"
                        onChange={(e) => {
                          setProfileData((prev) => ({...prev, details: {...prev.details, location: e.target.value}}));
                          setHasChanges(true);
                        }}
                        placeholder="Company location"
                      />
                    ) : (
                      <div className="font-semibold text-gray-900">{profileData.details.location}</div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Website</div>
                    {isEditing ? (
                      <input 
                        type="url" 
                        value={profileData.details.website_url} 
                        className="font-semibold text-indigo-600 bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-1 transition-all duration-200 shadow-md text-sm"
                        onChange={(e) => {
                          setProfileData((prev) => ({...prev, details: {...prev.details, website_url: e.target.value}}));
                          setHasChanges(true);
                        }}
                        placeholder="https://yourwebsite.com"
                      />
                    ) : (
                      <a href={profileData.details.website_url} className="font-semibold text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">{profileData.details.website}</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="mt-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-indigo-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-indigo-700">Products</h2>
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
                <div key={product.id} className="bg-indigo-50/60 rounded-xl p-5 border shadow-sm relative group">
                  <h3 className="font-semibold text-indigo-800 text-lg">{product.name}</h3>
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
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
          <div className="mt-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-indigo-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-indigo-700">Current Campaigns</h2>
              <a
                aria-label="Add Campaign"
                className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 shadow"
                href="/packages"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>
            <div className="space-y-4">
              {campaigns.map((camp) => (
                <div key={camp.id} className="bg-pink-50/60 rounded-xl p-5 border shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-pink-800 text-lg">{camp.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{camp.desc}</p>
                  </div>
                  <a
                    href="/analyticsview"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg text-sm font-semibold shadow hover:from-indigo-700 hover:to-pink-600 transition"
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

          {/* About Section */}
          <div className="mt-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-indigo-50">
            <div>
              <h3 className="text-lg font-bold text-indigo-700">About</h3>
              {
                isEditing ? (
                  <textarea 
                    value={profileData.sidebar_about}
                    onChange={(e) => {
                      setHasChanges(true);
                      setProfileData((prev) => ({...prev, sidebar_about: e.target.value}));
                    }}  
                    className="w-full mt-2 p-3 text-gray-700 text-base bg-white/90 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl transition-all duration-200 shadow-md resize-none"
                    placeholder="Tell people about your brand..."
                    rows="4"
                  />
                ) : 
                <p className="mt-2 text-gray-700 text-base">
                  {profileData.sidebar_about} 
                </p>
              }
            </div>
          </div>
          {/* Campaign Modal */}
  {/* No campaign modal, plus now links to marketingfilter */}
        </div>
      </div>
    </div>
  );
}
