"use client";

import { uploadAvatar } from "@/lib/avatars";
import { getInfProfile, updateProfileAvatar } from "@/lib/profils/inf_profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";
import { useState } from "react";

export default function InfluencerProfilePage(props) {
  const router = useRouter();
  const [avatar, setAvatar] = useState("/profile-pic.png"); // default placeholder
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

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

  const services = [
    { id: 1, icon: "📷", title: "3 Instagram Posts", desc: "3 Feed posts + 2 story mentions", price: "$450" },
    { id: 2, icon: "🎥", title: "1 Promo Video", desc: "30–60s short for Reels/TikTok", price: "$700" },
    { id: 3, icon: "📖", title: "Story Pack", desc: "5 Stories with swipe-up link", price: "$180" },
    { id: 4, icon: "🧾", title: "Sponsored Article", desc: "Blog post + social share", price: "$350" },
  ];

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
              <label className="mt-3 cursor-pointer text-sm text-indigo-600 font-medium hover:underline">
                Change Photo
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
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
              <div className="text-sm text-gray-500 font-medium">Prices & delivery</div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.id} className="bg-white/70 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg hover:shadow-xl transition flex flex-col">
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
                    <div className="text-xs text-gray-500">Delivery: 3–7 days</div>
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
