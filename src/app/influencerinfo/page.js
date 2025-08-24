export default function InfluencerInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <a href="/home" className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow" aria-label="Go to Home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
          </svg>
        </a>
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Paid to Work With Brands You Love</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">The simple way to sell, manage, and get paid for your Instagram, TikTok, YouTube, and UGC brand deals.</p>
        <a href="/signup?role=influencer" className="inline-block px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition text-lg">Join for Free</a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 items-center opacity-80">
          {/* Trusted brands logos (replace src with your own or use placeholders) */}
          <img src="/trusted1.svg" alt="Trusted Brand 1" className="h-8" />
          <img src="/trusted2.svg" alt="Trusted Brand 2" className="h-8" />
          <img src="/trusted3.svg" alt="Trusted Brand 3" className="h-8" />
          <img src="/trusted4.svg" alt="Trusted Brand 4" className="h-8" />
        </div>
      </section>

      {/* Loved by Creators Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Loved by 250,000+ Creators</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Travel & Fashion</h3>
              <p className="text-gray-700 mb-2">“I get brand deals every month and love the platform!”</p>
              <div className="font-semibold text-indigo-600">Zariyah Natalya</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Beauty & Lifestyle</h3>
              <p className="text-gray-700 mb-2">“Collabstr makes it easy to connect with brands and get paid.”</p>
              <div className="font-semibold text-indigo-600">Gabriel Christo</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-indigo-700 mb-2">Fitness & Wellness</h3>
              <p className="text-gray-700 mb-2">“I manage all my collabs and payments in one place.”</p>
              <div className="font-semibold text-indigo-600">Fredy Carpower360</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">List your services for Instagram, TikTok, YouTube, and UGC. Get discovered by brands.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Link</h3>
              <p className="text-gray-600">Share your custom link in your bio and social media. Brands can view and purchase your services.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Earning</h3>
              <p className="text-gray-600">Manage brand deals and get paid for your work directly through the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Brand Deals</h3>
            <p className="text-gray-600">Get discovered by thousands of brands looking to work with you.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Manage Collabs</h3>
            <p className="text-gray-600">Easily keep track of brand deals and deadlines. Submit deliverables directly through the platform.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Always Get Paid</h3>
            <p className="text-gray-600">Funds are collected upfront and paid out to you when you complete the collaboration.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-100 to-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Brand Deals?</h2>
        <p className="text-lg text-gray-700 mb-8">Join for free and start collaborating with top brands today.</p>
        <a href="/signup?role=influencer" className="inline-block px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition text-lg">Get Started</a>
      </section>
    </div>
  );
}
