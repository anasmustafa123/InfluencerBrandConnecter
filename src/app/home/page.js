"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  // Assume role is 'brand' for now
  const role = "brand";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 flex flex-col">
      {/* Header */}
      <header className="w-full flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-8 py-6 shadow-sm bg-white/80 backdrop-blur sticky top-0 z-10 gap-2 md:gap-0">
        <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow-sm text-center md:text-left">BrandLink</h1>
        <div className="flex flex-row gap-1 md:gap-3 items-center justify-center md:justify-end flex-wrap">
          <Link
            href="/influencerinfo"
            className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-indigo-500 transition text-sm md:text-base border-0 focus:outline-none focus:ring-2 focus:ring-indigo-300 whitespace-nowrap min-w-[120px] md:min-w-[unset]"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0v8m0 0H9m3 0h3" /></svg>
            Join as Influencer
          </Link>
          <Link
            href="/brandinfo"
            className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow-md hover:from-pink-600 hover:to-pink-500 transition text-sm md:text-base border-0 focus:outline-none focus:ring-2 focus:ring-pink-300 whitespace-nowrap min-w-[120px] md:min-w-[unset]"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" /></svg>
            Join as Brand
          </Link>
          <div className="flex items-center gap-2 md:gap-4 ml-1 md:ml-2">
            <button
              className="p-1 rounded-full border border-gray-300 hover:shadow bg-white"
              onClick={() => {
                if (role === "brand") {
                  router.push("/brandprofile");
                } else if (role === "influencer") {
                  router.push("/influencerprofile");
                }
              }}
              aria-label="Go to Profile"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-indigo-200"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="mb-2 md:mb-0" />

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center px-4 text-center min-h-[70vh]"
        style={{
          backgroundImage: "linear-gradient(rgba(245,245,255,0.1),rgba(255,255,255,0.7)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Gradient overlay for extra softness */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-100/60 via-white/80 to-pink-100/60 pointer-events-none -z-10" />
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
          The Easy Way to Connect <span className="text-indigo-600">Influencers</span> & <span className="text-pink-600">Brands</span>
        </h2>
        <p className="max-w-2xl mx-auto text-xl mb-8 text-gray-700">
          Grow your influence or launch your next campaign. Safe, easy, and effective collaborations in one platform.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link
            href="/influencerfilter"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-bold shadow-lg hover:from-indigo-700 hover:to-indigo-500 transition text-lg tracking-wide"
          >
            Find Influencers
          </Link>
          <Link
            href="/packages"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold shadow-lg hover:from-pink-700 hover:to-pink-500 transition text-lg tracking-wide"
          >
            Marketing Packages
          </Link>
          <Link
            href="/brandlist"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-400 text-white font-bold shadow-lg hover:from-green-700 hover:to-green-500 transition text-lg tracking-wide"
          >
            Find Brands
          </Link>
        </div>
      </section>

      {/* Info/Features Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 border border-indigo-100">
            <div className="bg-indigo-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Search Influencers</h3>
            <p className="text-gray-600">Find and hire vetted Instagram, TikTok, and YouTube influencers in seconds.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 border border-pink-100">
            <div className="bg-pink-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Post Campaigns</h3>
            <p className="text-gray-600">Launch campaigns and have thousands of influencers apply to work with your brand.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 border border-green-100">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Analytics</h3>
            <p className="text-gray-600">Monitor campaign performance and influencer content in real time with advanced analytics.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
