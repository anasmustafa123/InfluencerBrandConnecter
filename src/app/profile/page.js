"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * Profile page (Tailwind only)
 * Place this file at: src/app/profile/page.js  (or app/profile/page.js)
 *
 * Replace /public/profile-pic.png with your image or adjust the src.
 */

export default function ProfilePage() {
  const router = useRouter();

  const profile = {
    name: "John Doe",
    handle: "@johndoe",
    bio: "Content creator focusing on lifestyle, travel and tech. I collaborate with brands to produce high-engagement sponsored posts and stories.",
    avatar: "/profile-pic.png", // put an image in public/ or change to a URL
    followers: "120K",
    avgEngagement: "4.2%",
    platforms: [
      { name: "Instagram", url: "#", badge: "📸" },
      { name: "TikTok", url: "#", badge: "🎵" },
      { name: "Twitter", url: "#", badge: "🐦" },
    ],
  };

  const services = [
    { id: 1, icon: "📷", title: "3 Instagram Posts", desc: "3 Feed posts + 2 story mentions", price: "$450" },
    { id: 2, icon: "🎥", title: "1 Promo Video", desc: "30–60s short for Reels/TikTok", price: "$700" },
    { id: 3, icon: "📖", title: "Story Pack", desc: "5 Stories with swipe-up link", price: "$180" },
    { id: 4, icon: "🧾", title: "Sponsored Article", desc: "Blog post + social share", price: "$350" },
  ];

  // Example "order" handler (you can wire to modal or API)
  function handleOrder(service) {
    // In real app: open modal / pre-fill form / call API
    // For now we demo redirect to a mock checkout or login
    // e.g. router.push(`/checkout?service=${service.id}`);
    alert(`Order: ${service.title} — ${service.price}`);
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0 flex items-center justify-center">
              {/* If you don't have a file in public/, this will 404 — replace with your path or use the fallback below */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow">
                {/* Use next/image if you have /public/profile-pic.png */}
                <Image
                  src={profile.avatar}
                  alt={profile.name}
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
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-sm text-gray-500">{profile.handle}</p>
                </div>

                {/* CTA (desktop) */}
                <div className="hidden md:flex items-center space-x-3">
                  <button
                    onClick={() => alert("Message / Contact clicked")}
                    className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => alert("Contact form / booking clicked")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
                  >
                    Contact / Book
                  </button>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{profile.bio}</p>

              {/* stats & platforms */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{profile.followers}</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{profile.avgEngagement}</div>
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
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 border rounded-full text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <span className="text-lg">{p.badge}</span>
                      <span className="hidden sm:inline">{p.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA (mobile) */}
              <div className="mt-6 md:hidden flex items-center gap-3">
                <button
                  onClick={() => alert("Message / Contact clicked")}
                  className="flex-1 px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50"
                >
                  Message
                </button>
                <button
                  onClick={() => alert("Contact form / booking clicked")}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Sidebar layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: services (span 2 on large) */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Services Offered</h2>
              <div className="text-sm text-gray-500">Prices & delivery</div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.id} className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
                      <span>{s.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-medium text-gray-900">{s.title}</h3>
                        <div className="text-sm font-semibold text-gray-800">{s.price}</div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-500">Delivery: 3–7 days</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOrder(s)}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                      >
                        Order
                      </button>
                      <button
                        onClick={() => alert("Message about this service")}
                        className="px-3 py-1.5 border rounded-md text-sm hover:bg-gray-50"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: About / Reviews / Contact summary */}
          <aside className="bg-white rounded-xl border p-4 shadow-sm">
            <div>
              <h3 className="text-md font-semibold text-gray-800">About</h3>
              <p className="mt-2 text-sm text-gray-600">
                I specialise in brand partnerships and long-term collaborations. Open to one-off projects and long-term ambassador roles.
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-800">Top stats</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-2">
                <li>Avg reach: 25k</li>
                <li>Preferred niches: Lifestyle, Travel</li>
                <li>Response time: &lt; 24 hours</li>
              </ul>
            </div>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-800">Contact</h4>
              <button
                onClick={() => alert("Open contact form")}
                className="mt-2 w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
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
