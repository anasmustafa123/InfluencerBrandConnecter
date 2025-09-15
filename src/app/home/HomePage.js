'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function HomePage(props) {
  const router = useRouter();
  const role = props.userRole;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  // Dummy user state for demo
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <header className="sticky top-0 z-10 flex w-full flex-col gap-2 bg-white/80 px-4 py-6 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between md:gap-0 md:px-8">
        <h1 className="text-center text-2xl font-extrabold tracking-tight text-indigo-700 drop-shadow-sm md:text-left md:text-3xl">
          BrandLink
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-1 md:justify-end md:gap-3">
          {props.isUser ? (
            <>
              <div className="ml-1 flex items-center gap-2 md:ml-2 md:gap-4 relative" ref={menuRef}>
                <button
                  className="rounded-full border border-gray-300 bg-white p-1 hover:shadow focus:outline-none"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label="Open profile menu"
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-indigo-200 object-cover md:h-10 md:w-10"
                  />
                </button>
                 {menuOpen && (
                   <div className="absolute left-0 top-0 mt-2 -translate-x-full w-40 bg-white rounded-xl shadow-lg border border-gray-100 z-50 py-2 flex flex-col animate-fade-in">
                    <button
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-indigo-50 font-medium rounded-t-xl"
                      onClick={() => {
                        setMenuOpen(false);
                        if (role === 'brand') {
                          router.push('/brandprofile');
                        } else if (role === 'influencer') {
                          router.push('/influencerprofile');
                        }
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-indigo-50 font-medium"
                      onClick={() => {
                        setMenuOpen(false);
                        router.push('/settings');
                      }}
                    >
                      Settings
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 font-medium rounded-b-xl"
                      onClick={async () => {
                        setMenuOpen(false);
                        const res = await fetch("/api/user/logout", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                        });
                        window.location.href = "/home";
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/influencerinfo"
                className="flex min-w-[120px] items-center gap-1 rounded-full border-0 bg-gradient-to-r from-indigo-500 to-indigo-400 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white shadow-md transition hover:from-indigo-600 hover:to-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none md:min-w-[unset] md:gap-2 md:px-5 md:py-2 md:text-base"
              >
                <svg
                  className="h-4 w-4 text-white md:h-5 md:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0v8m0 0H9m3 0h3"
                  />
                </svg>
                Join as Influencer
              </Link>
              <Link
                href="/login"
                className="flex min-w-[120px] justify-center items-center gap-1 rounded-full border-0 bg-gradient-to-r from-gray-700 to-indigo-500 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white shadow-md transition hover:from-gray-800 hover:to-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:outline-none md:min-w-[unset] md:gap-2 md:px-5 md:py-2 md:text-base"
              >
                Log In
              </Link>
              <Link
                href="/brandinfo"
                className="flex min-w-[120px] items-center gap-1 rounded-full border-0 bg-gradient-to-r from-pink-500 to-pink-400 px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white shadow-md transition hover:from-pink-600 hover:to-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none md:min-w-[unset] md:gap-2 md:px-5 md:py-2 md:text-base"
              >
                <svg
                  className="h-4 w-4 text-white md:h-5 md:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 01-8 0M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                  />
                </svg>
                Join as Brand
              </Link>
            </>
          )}
        </div>
      </header>
      <div className="mb-2 md:mb-0" />

      <section
        className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,245,255,0.1),rgba(255,255,255,0.7)), url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-100/60 via-white/80 to-pink-100/60" />
        <h2 className="mb-6 text-5xl font-extrabold text-gray-900 drop-shadow-sm md:text-6xl">
          The Easy Way to Connect{' '}
          <span className="text-indigo-600">Influencers</span> &{' '}
          <span className="text-pink-600">Brands</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700">
          Grow your influence or launch your next campaign. Safe, easy, and
          effective collaborations in one platform.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="/influencerfilter"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-8 py-4 text-lg font-bold tracking-wide text-white shadow-lg transition hover:from-indigo-700 hover:to-indigo-500"
          >
            Find Influencers
          </Link>
          <Link
            href="/packages"
            className="rounded-full bg-gradient-to-r from-pink-600 to-pink-400 px-8 py-4 text-lg font-bold tracking-wide text-white shadow-lg transition hover:from-pink-700 hover:to-pink-500"
          >
            Marketing Packages
          </Link>
          <Link
            href="/brandlist"
            className="rounded-full bg-gradient-to-r from-green-600 to-green-400 px-8 py-4 text-lg font-bold tracking-wide text-white shadow-lg transition hover:from-green-700 hover:to-green-500"
          >
            Find Brands
          </Link>
        </div>
      </section>

      <section className="bg-white/80 px-4 py-16 backdrop-blur">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-indigo-100 bg-white p-8 text-center shadow-md">
            <div className="mb-4 rounded-full bg-indigo-100 p-4">
              <svg
                className="h-8 w-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Search Influencers</h3>
            <p className="text-gray-600">
              Find and hire vetted Instagram, TikTok, and YouTube influencers in
              seconds.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-pink-100 bg-white p-8 text-center shadow-md">
            <div className="mb-4 rounded-full bg-pink-100 p-4">
              <svg
                className="h-8 w-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Post Campaigns</h3>
            <p className="text-gray-600">
              Launch campaigns and have thousands of influencers apply to work
              with your brand.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-green-100 bg-white p-8 text-center shadow-md">
            <div className="mb-4 rounded-full bg-green-100 p-4">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Track Analytics</h3>
            <p className="text-gray-600">
              Monitor campaign performance and influencer content in real time
              with advanced analytics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
