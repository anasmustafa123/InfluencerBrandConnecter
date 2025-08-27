'use client';
import {
    Users,
    Image,
    Globe,
    BarChart2,
    Clock,
    BadgeDollarSign,
  } from "lucide-react";
  
  const packages = [
    {
      title: "Starter",
      tagline: "Best for local testing in a single market",
      features: [
        { icon: <Users className="w-5 h-5 text-indigo-600" />, text: "1–2 micro-influencers (5k–20k followers)" },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, text: "1 Instagram post + 2 IG stories" },
        { icon: <Globe className="w-5 h-5 text-green-500" />, text: "Instagram only" },
        { icon: <BarChart2 className="w-5 h-5 text-indigo-600" />, text: "Link in bio → 3 days" },
      ],
      metrics: [
        { label: "Reach", value: "10k–30k" },
        { label: "Views", value: "~5k–10k" },
        { label: "Conversions", value: "~50–150" },
      ],
      region: { label: "Local", color: "bg-green-500" },
      duration: "1 week",
      price: "$499",
    },
    {
      title: "Growth",
      tagline: "Expand regionally with more influencers & platforms",
      features: [
        { icon: <Users className="w-5 h-5 text-indigo-600" />, text: "3–5 mid-tier influencers (20k–100k followers)" },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, text: "2 IG posts + 4 IG stories + 1 TikTok" },
        { icon: <Globe className="w-5 h-5 text-blue-500" />, text: "Instagram + TikTok" },
        { icon: <BarChart2 className="w-5 h-5 text-indigo-600" />, text: "Link in bio → 1 week" },
      ],
      metrics: [
        { label: "Reach", value: "50k–150k" },
        { label: "Views", value: "~20k–50k" },
        { label: "Conversions", value: "~200–500" },
      ],
      region: { label: "Regional", color: "bg-blue-500" },
      duration: "2–3 weeks",
      price: "$999",
    },
    {
      title: "Premium",
      tagline: "Perfect for multi-country campaigns with strong brand push",
      features: [
        { icon: <Users className="w-5 h-5 text-indigo-600" />, text: "5–8 influencers (50k–300k followers)" },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, text: "3 IG posts + 6 IG stories + 2 TikToks + 1 YouTube Shorts" },
        { icon: <Globe className="w-5 h-5 text-purple-500" />, text: "Instagram + TikTok + YouTube Shorts" },
        { icon: <BarChart2 className="w-5 h-5 text-indigo-600" />, text: "Link in bio → 2 weeks" },
      ],
      metrics: [
        { label: "Reach", value: "200k–500k" },
        { label: "Views", value: "~100k–250k" },
        { label: "Conversions", value: "~800–1,500" },
      ],
      region: { label: "Multi-country", color: "bg-purple-500" },
      duration: "1–2 months",
      price: "$2499",
    },
    {
      title: "Elite",
      tagline: "For global launches and maximum exposure",
      features: [
        { icon: <Users className="w-5 h-5 text-indigo-600" />, text: "10+ influencers (100k–1M+ followers)" },
        { icon: <Image className="w-5 h-5 text-indigo-600" />, text: "5 IG posts + 10 IG stories + 3 TikToks + 2 YouTube videos + optional blogs" },
        { icon: <Globe className="w-5 h-5 text-yellow-500" />, text: "Instagram + TikTok + YouTube + optional X/Twitter" },
        { icon: <BarChart2 className="w-5 h-5 text-indigo-600" />, text: "Link in bio → 1 month" },
      ],
      metrics: [
        { label: "Reach", value: "1M–3M" },
        { label: "Views", value: "~500k–1M" },
        { label: "Conversions", value: "~5,000–15,000" },
      ],
      region: { label: "Global", color: "bg-yellow-400" },
      duration: "3 months",
      price: "$4999",
    },
  ];
  
  export default function Packages() {
    return (
      <div className="py-10 px-4 max-w-7xl mx-auto relative min-h-screen bg-white">
        {/* Home Button */}
        <div className="fixed top-6 left-6 z-50">
          <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
            </svg>
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Influencer Marketing Packages</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{pkg.title}</h2>
                <span className={`text-xs text-white px-3 py-1 rounded-full font-medium ${pkg.region.color}`}>
                  {pkg.region.label}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-4">{pkg.tagline}</div>
              <ul className="mb-4 space-y-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {f.icon}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart2 className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">Metrics</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {pkg.metrics.map((m) => (
                    <span key={m.label} className="bg-gray-100 rounded px-2 py-1">
                      <span className="font-semibold">{m.label}:</span> {m.value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-sm">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <BadgeDollarSign className="w-4 h-4 text-indigo-600" />
                <span className="text-lg font-bold">Starts at {pkg.price}</span>
              </div>
              <button className="mt-auto bg-indigo-600 text-white rounded-xl py-2 px-4 font-semibold hover:bg-indigo-700 transition" 
               onClick={async () => {
                try {
                  const res = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      to: "amylalex25@gmail.com ", 
                      subject: "Package Selected 🎉",
                      text: "You have successfully chosen your package.",
                      html: "<p><strong>Congrats!</strong> You have successfully chosen your package.</p>",
                    }),
                  });
            
                  const data = await res.json();
                  if (data.success) {
                    alert("✅ Email sent successfully!");
                  } else {
                    alert("❌ Failed to send email: " + data.error);
                  }
                } catch (err) {
                  console.error("Error sending email:", err);
                  alert("⚠️ Something went wrong.");
                }
              }}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }