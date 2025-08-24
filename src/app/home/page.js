import Link from "next/link";

export default function HomePage() {
return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
    <header className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">BrandLink</h1>
        <div className="flex gap-3">
        <Link
            href="/signup?role=influencer"
            className="px-4 py-2 text-sm rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition"
        >
            Join as Influencer 
        </Link>
        <Link
            href="/signup?role=brand"
            className="px-4 py-2 text-sm rounded-full border border-pink-500 text-pink-600 hover:bg-pink-50 transition"
        >
            Join as Brand 
        </Link>
        </div>
    </header>

      {/* Hero Section */}
    <main className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Connecting <span className="text-indigo-600">Influencers</span> with{" "}
        <span className="text-pink-600">Brands</span>
        </h2>
        <p className="max-w-2xl text-gray-600 text-lg">
        Grow your influence or launch your next campaign. Safe, easy, and
        effective collaborations in one platform.
        </p>
                {/* New Buttons */}
                <div className="flex gap-4 mt-6">
                    <Link
                        href="/influencerfilter"
                        className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
                    >
                        Find Influencers
                    </Link>
                    <Link
                        href="/marketingfilter"
                        className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 transition"
                    >
                        Marketing Packages
                    </Link>
                    <Link
                        href="/brandlist"
                        className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition"
                    >
                        Find Brands
                    </Link>
                </div>
    </main>
    </div>
);
}
