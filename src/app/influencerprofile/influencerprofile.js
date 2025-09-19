"use client";

import { uploadAvatar } from "@/lib/avatars";
import { getInfProfile, updateProfileAvatar } from "@/lib/profils/inf_profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";
import { useState } from "react";

export default function InfluencerProfilePage(props) {
  // Delete service handler
  const handleDeleteService = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };
  const router = useRouter();
  const [avatar, setAvatar] = useState("/profile-pic.png"); // default placeholder
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  // Add service popup state and handler
  const [showAddService, setShowAddService] = useState(false);
  const [newService, setNewService] = useState({ title: "", desc: "", price: "", icon: "" });
  const [services, setServices] = useState([
    { id: 1, icon: "📷", title: "3 Instagram Posts", desc: "3 Feed posts + 2 story mentions", price: "$450" },
    { id: 2, icon: "🎥", title: "1 Promo Video", desc: "30–60s short for Reels/TikTok", price: "$700" },
    { id: 3, icon: "📖", title: "Story Pack", desc: "5 Stories with swipe-up link", price: "$180" },
    { id: 4, icon: "🧾", title: "Sponsored Article", desc: "Blog post + social share", price: "$350" },
  ]);
  function handleAddService(e) {
    e.preventDefault();
    // Add service to local state for display
      setServices(prev => [
        ...prev,
        {
          id: prev.length ? prev[prev.length - 1].id + 1 : 1,
          ...newService,
          delivery: `${newService.deliveryMin}-${newService.deliveryMax} days`,
          desc: `${newService.descNumber} ${newService.descType}`,
          price: `${newService.priceNumber} ${newService.priceCurrency}`
        }
      ]);
    // TODO: Add service to backend or local state
    alert(`Service added: ${newService.title}`);
  setShowAddService(false);
  setNewService({ title: "", icon: "", deliveryMin: 2, deliveryMax: 7, descNumber: 1, descType: "", priceNumber: "", priceCurrency: "dollar" });
  }

  console.log(props.profile_data)
  let platforms =  props && props.profile_data && props.profile_data.influencers && props.profile_data.influencers.influencer_platforms ? props.profile_data.influencers.influencer_platforms : []
  platforms = platforms.map((platform) => {
    return {name: platform.platforms.display_name, url: platform.url, badge: platform.platforms.icon}
  })

  // console.log({platforms})
  const profile = {
    name: props.profile_data.name,
    handle: props.profile_data.handle,
    bio: props.profile_data.bio,
    followers: "120K",
    avgEngagement: "4.2%",
    platforms,
    sidebar_about: props.profile_data.sidebar_about
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setShowConfirm(true); 
  };
  

  function handleOrder(service) {
    alert(`Order: ${service.title} — ${service.price}`);
  }

  // // Handle avatar upload
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   console.log({file})
  //   const url = URL.createObjectURL(file);
  //   console.log({url})
  //   setPreview(url);

  //   // 👉 If using Supabase Storage:
  //   // await supabase.storage.from("avatars").upload(`user-${userId}.png`, file, { upsert: true });
  //   // then save the public URL into your `avatar` field in the DB
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4 flex flex-col items-center">
      {/* Home Button */}
      <div className="mb-8 flex justify-start w-full max-w-5xl">
        <a
          href="/home"
          className="inline-flex items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
          </svg>
        </a>
      </div>
      <div className="mx-auto w-full max-w-5xl">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10 border border-white/40">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg">
                <Image
                  src={preview || avatar}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <label className="cursor-pointer text-sm text-indigo-600 font-medium hover:underline">
                  Change Photo
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
                </div>
                <div>
                {props.userRole === "influencer" && (
                  <button
                    className="px-4 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg text-xs font-semibold shadow hover:from-indigo-600 hover:to-pink-600 transition"
                    onClick={() => setEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
            {showConfirm && selectedFile && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full flex flex-col items-center gap-4">
                  <h2 className="text-lg font-bold text-gray-900">Confirm Profile Picture</h2>
                  <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-indigo-400">
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
                        // TODO: upload to Supabase here
                        try {
                          const url = await uploadAvatar(props.userId, selectedFile, "profile/influencer");
                          await updateProfileAvatar(props.userId, url);
                          setAvatar(url); // update main avatar
                          setShowConfirm(false); // close modal
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
                        setPreview(avatar); // revert preview
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
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm">
                    {profile.name}
                  </h1>
                  <p className="text-base text-indigo-500 font-medium">{profile.handle}</p>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                  <button
                    onClick={() => alert("Message / Contact clicked")}
                    className="px-5 py-2 border border-indigo-300 rounded-lg text-sm font-medium bg-white/70 hover:bg-indigo-50 shadow"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => alert("Contact form / booking clicked")}
                    className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow hover:from-indigo-600 hover:to-pink-600"
                  >
                    Contact / Book
                  </button>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-lg italic">{profile.bio}</p>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-3">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{profile.followers}</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{profile.avgEngagement}</div>
                      <div className="text-xs text-gray-500">Avg engagement</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {profile.platforms.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-indigo-100 rounded-full text-sm text-indigo-700 font-semibold shadow hover:bg-indigo-50 transition"
                      >
                        <span className="text-lg">
                        <img
                          src={p.badge}
                          alt=""
                          fill
                          className="w-6"
                          sizes="(max-width: 768px) 128px, 144px"
                          style={{ objectFit: "cover" }}
                        />
                          {/* {p.badge} */}
                          </span>
                        <span className="hidden sm:inline">{p.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:hidden flex items-center gap-3">
                  <button
                    onClick={() => alert("Message / Contact clicked")}
                    className="flex-1 px-4 py-2 border border-indigo-200 rounded-lg text-sm font-medium bg-white/70 hover:bg-indigo-50 shadow"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => alert("Contact form / booking clicked")}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg text-sm font-semibold shadow hover:from-indigo-600 hover:to-pink-600"
                  >
                    Contact
                  </button>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-indigo-700 tracking-tight">Services Offered</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 font-medium">Prices & delivery</span>
                {props.userRole === "influencer" && (
                  <button
                    className="p-1 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 shadow"
                    onClick={() => setShowAddService(true)}
                    aria-label="Add Service"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            {showAddService && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <form onSubmit={handleAddService} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">Add New Service</h3>
                    <input
                      type="text"
                      placeholder="Service Title"
                      value={newService.title}
                      onChange={e => setNewService(s => ({ ...s, title: e.target.value }))}
                      className="border rounded px-3 py-2"
                      required
                    />
                    <select
                      value={newService.icon}
                      onChange={e => setNewService(s => ({ ...s, icon: e.target.value }))}
                      className="border rounded px-3 py-2"
                      required
                    >
                      <option value="">Select Icon</option>
                      <option value="📷">Camera</option>
                      <option value="🎥">Video</option>
                      <option value="📖">Book</option>
                      <option value="🧾">Article</option>
                      <option value="📝">Note</option>
                    </select>
                    <div className="flex gap-2">
                      <label className="flex flex-col text-sm">
                        Delivery Min
                        <input
                          type="number"
                          min={1}
                          max={30}
                          value={newService.deliveryMin || 2}
                          onChange={e => setNewService(s => ({ ...s, deliveryMin: Number(e.target.value) }))}
                          className="border rounded px-2 py-1"
                          required
                        />
                      </label>
                      <label className="flex flex-col text-sm">
                        Delivery Max
                        <input
                          type="number"
                          min={1}
                          max={30}
                          value={newService.deliveryMax || 7}
                          onChange={e => setNewService(s => ({ ...s, deliveryMax: Number(e.target.value) }))}
                          className="border rounded px-2 py-1"
                          required
                        />
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <label className="flex flex-col text-sm">
                        Number
                        <select
                          value={newService.descNumber || 1}
                          onChange={e => setNewService(s => ({ ...s, descNumber: Number(e.target.value) }))}
                          className="border rounded px-2 py-1"
                          required
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1}</option>
                          ))}
                        </select>
                      </label>
                      <label className="flex flex-col text-sm">
                        Type
                        <input
                          type="text"
                          placeholder="Type (e.g. posts, reels, videos)"
                          value={newService.descType || ""}
                          onChange={e => setNewService(s => ({ ...s, descType: e.target.value }))}
                          className="border rounded px-2 py-1"
                          required
                        />
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <label className="flex flex-col text-sm flex-1">
                        Price
                        <input
                          type="number"
                          min={0}
                          placeholder="Amount"
                          value={newService.priceNumber || ""}
                          onChange={e => setNewService(s => ({ ...s, priceNumber: e.target.value }))}
                          className="border rounded px-2 py-1"
                          required
                        />
                      </label>
                      <label className="flex flex-col text-sm w-32">
                        Currency
                        <select
                          value={newService.priceCurrency || "dollar"}
                          onChange={e => setNewService(s => ({ ...s, priceCurrency: e.target.value }))}
                          className="border rounded px-2 py-1"
                          required
                        >
                          <option value="dollar">USD </option>
                          <option value="dirham">AED </option>
                          <option value="egyptian pound">EGP</option>
                        </select>
                      </label>
                    </div>
                  <div className="flex gap-3 mt-2">
                    <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600">Add</button>
                    <button type="button" className="px-4 py-2 border rounded-lg font-medium hover:bg-gray-100" onClick={() => setShowAddService(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.id} className="relative bg-white/70 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg hover:shadow-xl transition flex flex-col">
                  {/* Delete button */}
                  <button
                    className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full text-pink-400 text-base font-bold transition-colors duration-150 hover:bg-pink-100 hover:text-pink-600 focus:outline-none"
                    onClick={() => handleDeleteService(s.id)}
                    aria-label="Delete Service"
                    style={{ boxShadow: 'none', border: 'none', background: 'none' }}
                  >
                    ×
                  </button>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center text-3xl shadow">
                      <span>{s.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                        <div className="text-base font-bold text-indigo-700">{s.price}</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-gray-500">Delivery: {s.delivery || "3–7 days"}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOrder(s)}
                        className={`${props.userRole === "influencer" ? "hidden" : ""} px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-md text-sm font-semibold shadow hover:from-indigo-600 hover:to-pink-600`}
                      >
                        Order
                      </button>
                      <button
                        onClick={() => alert("Message about this service")}
                        className={`${props.userRole === "influencer" ? "hidden" : ""} px-4 py-1.5 border border-indigo-200 rounded-md text-sm font-medium bg-white/70 hover:bg-indigo-50 shadow`}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="bg-white/70 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-indigo-700">About</h3>
              <p className="mt-2 text-gray-700 text-base">
                {profile.sidebar_about} 
                {console.log({profile})}
              </p>
            </div>
            <div className="border-t pt-4">
              <h4 className="text-base font-semibold text-indigo-600">Top stats</h4>
              <ul className="mt-2 text-gray-700 space-y-2 text-sm">
                <li>Avg reach: 25k</li>
                <li>Preferred niches: Lifestyle, Travel</li>
                <li>Response time: &lt; 24 hours</li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <h4 className="text-base font-semibold text-indigo-600">Contact</h4>
              <button
                onClick={() => alert("Open contact form")}
                className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg font-semibold shadow hover:from-green-600 hover:to-teal-500"
              >
                Contact & Booking
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
