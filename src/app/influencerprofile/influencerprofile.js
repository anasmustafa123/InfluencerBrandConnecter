"use client";

import { uploadAvatar } from "@/lib/avatars";
import { getInfProfile, updateProfileData } from "@/lib/profils/inf_profile";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userAgent } from "next/server";
import { useState } from "react";
import {NewServise} from "./NewServise";
import {ServiseWidget} from "./ServiseWidget";
import DraggableComponent from "@/components/draggablecomponent";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSave, FaEdit } from "react-icons/fa";
import SocialLinksSelector from "./influencerselector";

export default function InfluencerProfilePage(props) {

  console.log({props: props.profile_data.avatar_url})
  const handleDeleteService = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const router = useRouter();
  const [avatar, setAvatar] = useState(props.profile_data && props.profile_data.avatar_url ? props.profile_data.avatar_url : ""); 
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAddService, setShowAddService] = useState(false);
  const [newService, setNewService] = useState({ title: "", icon: "", delivery_from: 2, delivery_to: 7, descNumber: 1, descType: "", price: 0, currency: {icon:"$", abbreviation: "USD", name: "dollar"},influencer_servise_line: []});
  const [influencer_servises, set_infeluencer_servises] = useState(props.influencer_servises);
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [platformWidgetState, setPlatformWidgetState] = useState(false);
  const [profileData, setProfileData] = useState(() => {
    let platforms =  props && props.profile_data && props.profile_data.influencers && props.profile_data.influencers.influencer_platforms ? props.profile_data.influencers.influencer_platforms : []
    platforms = platforms.map((platform) => {
      return {name: platform.platforms.display_name, url: platform.url, badge: platform.platforms.icon}
    });
    return { 
      name: props.profile_data.name,
      handle: props.profile_data.handle,
      bio: props.profile_data.bio,
      followers: "120K",
      avgEngagement: "4.2%",
      platforms,
      sidebar_about: props.profile_data.sidebar_about 
  }});

  const platforms = ['facebook', 'adssa', 'ggg']
 

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

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4 flex flex-col items-center">
      <div className="flex w-full justify-between max-w-5xl">
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
              className={`mb-4 ${props.userRole === "influencer" && props.isUsersProfile && hasChanges ? "inline-flex" : "hidden"} text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition`}
              aria-label="save changes"
              onClick={async() => {
                console.log({profileData, avatar})
                const res = await updateProfileData(props.influencer_id, profileData.name, profileData.bio, profileData.handle, profileData.sidebar_about, avatar);
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
              className={`mb-4 ${props.userRole === "influencer" && props.isUsersProfile ? "inline-flex" : "hidden"} text-2xl text-blue-800 items-center p-2 rounded-full bg-white/70 border border-gray-200 hover:bg-white/90 shadow-lg backdrop-blur-md transition`}
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
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10 border border-white/40">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg">
                <Image
                  src={preview || avatar}
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {
                props.userRole === "influencer" && props.isUsersProfile && (
                  <div className=" mt-3 flex items-center gap-3">
                    <label className="cursor-pointer text-sm text-indigo-600 font-medium hover:underline">
                      Change Photo
                      <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                )
              }
              
                <div>
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
                          console.log({url});
                          setHasChanges(true);
                          // await updateProfileAvatar(props.userId, url);
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
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={profileData.name} 
                      className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-2 transition-all duration-200 shadow-lg"
                      onChange={(e) => {
                        setHasChanges(true);
                        setProfileData((prev) => ({...prev, name: e.target.value}));
                      }}
                      placeholder="Enter your name"
                    />
                  ) : (
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow-sm">
                      {profileData.name}
                    </h1>
                    
                  )}
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={profileData.handle} 
                      className="text-base text-indigo-600 font-semibold bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg px-3 py-1 mt-1 transition-all duration-200 shadow-md"
                      onChange={(e) => {
                        setProfileData((prev) => ({...prev, handle: e.target.value}));
                        setHasChanges(true);
                      }}
                      placeholder="Enter your handle"
                    />
                  ) : (
                    <p className="text-base text-indigo-500 font-medium">{profileData.handle}</p>
                  )}
                  
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
              {isEditing ? (
                <textarea 
                  value={profileData.bio} 
                  className="mt-4 w-full text-gray-700 text-lg italic bg-white/80 backdrop-blur-md border-2 border-indigo-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 transition-all duration-200 shadow-lg resize-none"
                  onChange={(e) => {
                    setProfileData((prev) => ({...prev, bio: e.target.value}));
                    setHasChanges(true);
                  }}
                  placeholder="Enter your bio"
                  rows="2"
                />
              ) : (
                <p className="mt-4 text-gray-700 text-lg italic">{profileData.bio}</p>
              )}
              
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-3">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{profileData.followers}</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{profileData.avgEngagement}</div>
                      <div className="text-xs text-gray-500">Avg engagement</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {isEditing ? (
                      <>
                      {/* <button 
                        className="px-5 py-2 border border-indigo-300 rounded-lg text-sm font-medium bg-white/70 hover:bg-indigo-50 shadow"
                        onClick={() => {
                          setPlatformWidgetState((s)=> !s)
                        }} 
                      >
                        Edit Platforms
                      </button>
                      <DraggableComponent 
                        children={<SocialLinksSelector influencer_id={props.influencer_id} />}
                        state={platformWidgetState}
                        setState={setPlatformWidgetState}
                      /> */}
                      </>
                    ) : profileData.platforms.map((p) => (
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
                    {/* {} */}
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
                {props.userRole === "influencer" && props.isUsersProfile && (
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
              <NewServise 
                newService={newService} 
                setNewService={setNewService} 
                setShowAddService={setShowAddService}
                currencies={props.currencies}
                influencer_id={props.influencer_id} 
              />
            )}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {influencer_servises.map((inf_servise) => (
                <ServiseWidget service={inf_servise} key={inf_servise.id}/>
              ))}
            </div>
          </div>
          <aside className="bg-white/70 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg flex flex-col gap-6">
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
                    placeholder="Tell people about yourself..."
                    rows="4"
                  />
                ) : 
                <p className="mt-2 text-gray-700 text-base">
                  {profileData.sidebar_about} 
                </p>
              }
              
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
