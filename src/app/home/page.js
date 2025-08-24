import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="w-full flex justify-between items-center px-8 py-6 shadow-sm bg-white">
                <h1 className="text-3xl font-bold text-indigo-700 tracking-tight">BrandLink</h1>
                <div className="flex gap-3">
                    <Link
                        href="/influencerinfo"
                        className="px-4 py-2 text-sm rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition"
                    >
                        Join as Influencer
                    </Link>
                    <Link
                        href="/brandinfo"
                        className="px-4 py-2 text-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-50 transition"
                    >
                        Join as Brand
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-4 text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    The Easy Way to Connect <span className="text-indigo-600">Influencers</span> & <span className="text-pink-600">Brands</span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 text-xl mb-8">
                    Grow your influence or launch your next campaign. Safe, easy, and effective collaborations in one platform.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                    <Link
                        href="/influencerfilter"
                        className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition text-lg"
                    >
                        Find Influencers
                    </Link>
                    <Link
                        href="/marketingfilter"
                        className="px-8 py-4 rounded-full bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 transition text-lg"
                    >
                        Marketing Packages
                    </Link>
                    <Link
                        href="/brandlist"
                        className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition text-lg"
                    >
                        Find Brands
                    </Link>
                </div>
            </section>

            {/* Info/Features Section */}
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
        </div>
    );
}
