"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const brands = [
	{
		id: 1,
		name: "Acme Corp.",
		desc: "Innovative products for modern lifestyles.",
		logo: "/brand-logo.png",
		tags: ["Tech", "Lifestyle"],
	},
	{
		id: 2,
		name: "Glowify",
		desc: "Beauty and skincare for all.",
		logo: "/brand-logo2.png",
		tags: ["Beauty", "Skincare"],
	},
	{
		id: 3,
		name: "FitFuel",
		desc: "Nutrition and supplements for athletes.",
		logo: "/brand-logo3.png",
		tags: ["Nutrition", "Supplements", "Fitness"],
	},
];

export default function BrandListPage() {
	const router = useRouter();
	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4">
			<div className="flex justify-between items-center max-w-4xl mx-auto mb-4">
				<button
					onClick={() => router.back()}
					className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow"
					aria-label="Go Back"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-indigo-600"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<Link
					href="/home"
					className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow"
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
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5"
						/>
					</svg>
				</Link>
			</div>
			<div className="mx-auto w-full max-w-4xl">
				<h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
					Find Brands
				</h1>
				{/* Search bar and filter icon */}
				<div className="flex items-center gap-3 mb-8 justify-center">
					<div className="relative w-full max-w-md">
						<input
							type="text"
							placeholder="Search brands..."
							className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
						/>
						<svg
							className="absolute left-3 top-2.5 text-gray-400"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							viewBox="0 0 24 24"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
					</div>
					<button
						className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md flex items-center justify-center"
						aria-label="Filter Brands"
					>
						{/* Funnel icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.382a1 1 0 0 1-.293.707l-6.414 6.414A2 2 0 0 0 13 15.586V19a1 1 0 0 1-1.447.894l-2-1A1 1 0 0 1 9 18v-2.414a2 2 0 0 0-.586-1.414L2 7.09A1 1 0 0 1 1.707 6.382V4z"
							/>
						</svg>
					</button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{brands.map((brand) => (
						<Link
							key={brand.id}
							href={`/brandprofile?id=${brand.id}`}
							className="bg-white rounded-2xl shadow-md border p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
						>
							<div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-pink-500">
								<Image
									src={brand.logo}
									alt={brand.name}
									fill
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg font-bold mb-1 text-center">
								{brand.name}
							</h2>
							<p className="text-gray-500 text-center mb-2">
								{brand.desc}
							</p>
							<div className="flex flex-wrap gap-2 justify-center mt-2">
								{brand.tags &&
									brand.tags.map((tag) => (
										<span
											key={tag}
											className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
