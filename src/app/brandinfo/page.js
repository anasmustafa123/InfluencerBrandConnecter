export default function BrandInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Home Button */}
  <div className="fixed top-6 left-6 z-50">
        <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
          </svg>
        </a>
      </div>

      {/* Promotional Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto mt-10 mb-12 px-4">
        <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-3xl shadow-xl p-10 flex flex-col items-center border border-pink-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">Supercharge Your Brand with Influencer Marketing </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 text-center">
            BrandLink helps you connect with trusted influencers, launch data-driven campaigns, and grow your brand with ease. Experience seamless campaign setup, real results, and a network of top creators—all in one platform.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-6 mb-10 justify-center">
            <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-2">
                {/* Chart/Analytics Icon */}
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 17V9m4 8V5m4 12v-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Data-Driven Results</h3>
              <p className="text-gray-600 text-sm">Track campaign performance and ROI with real-time analytics and actionable insights.</p>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-2">
                {/* Users/Handshake Icon */}
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-2.13a4 4 0 10-8 0 4 4 0 008 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Trusted Influencers</h3>
              <p className="text-gray-600 text-sm">Work with a vetted network of creators to ensure quality, authenticity, and brand safety.</p>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-2">
                {/* Lightning/Bolt Icon */}
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-1">Easy Campaign Setup</h3>
              <p className="text-gray-600 text-sm">Launch and manage campaigns in minutes with our intuitive, user-friendly tools.</p>
            </div>
          </div>
          <a href="/signup?role=brand" className="mt-2 px-10 py-4 rounded-full bg-pink-600 text-white font-bold text-lg shadow-lg hover:bg-pink-700 transition">Get Started as a Brand</a>
        </div>
      </section>

      {/* Info: Increase Reach & Visibility */}
      <section className="py-10 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">Increase Your Reach & Visibility</h2>
            <p className="text-gray-700 mb-2">Tap into new audiences and expand your brand’s presence by collaborating with top influencers across multiple platforms. Our network helps you amplify your message and get discovered by thousands of potential customers.</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Grow your followers and brand awareness</li>
              <li>Boost engagement with authentic content</li>
              <li>Reach targeted demographics at scale</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/increase-reach-visibility.png" alt="Increase Reach and Visibility" className="rounded-xl shadow-lg w-full max-w-xs" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Search Influencers</h3>
            <p className="text-gray-600">Find and hire vetted Instagram, TikTok, and YouTube influencers in seconds.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Post Campaigns</h3>
            <p className="text-gray-600">Launch campaigns and have thousands of influencers apply to work with your brand.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Analytics</h3>
            <p className="text-gray-600">Monitor campaign performance and influencer content in real time with advanced analytics.</p>
          </div>
        </div>
      </section>

      {/* Content & Security Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Quality Content, Securely</h2>
            <ul className="space-y-4 text-gray-700">
              <li><span className="font-semibold text-pink-600">No Upfront Cost:</span> Search influencers for free. No subscriptions, contracts, or hidden fees.</li>
              <li><span className="font-semibold text-pink-600">Vetted Influencers:</span> Every influencer is vetted for quality and professionalism.</li>
              <li><span className="font-semibold text-pink-600">Instant Chat:</span> Communicate directly with influencers through our platform.</li>
              <li><span className="font-semibold text-pink-600">Secure Purchases:</span> Your money is held safely until you approve the influencer’s work.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src="/brand-content-demo.png" alt="Content Demo" className="rounded-xl shadow-lg w-full max-w-xs" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Brands Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-4">“Best platform to connect with influencers and content creators. Collabstr is the easiest to use and gives the best results for my brand.”</p>
              <div className="font-semibold text-pink-600">Myriam – Founder of BBeyond</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-4">“Super easy for us to search for relevant influencers and pay them. We save at least 10-20 hours a month on this.”</p>
              <div className="font-semibold text-pink-600">Courtney – Marketer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-100 to-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Grow Your Brand?</h2>
        <p className="text-lg text-gray-700 mb-8">Join for free and start collaborating with top influencers today.</p>
        <a href="/signup?role=brand" className="inline-block px-8 py-4 rounded-full bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 transition text-lg">Get Started</a>
      </section>
    </div>
  );
}
