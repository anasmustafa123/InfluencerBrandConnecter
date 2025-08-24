import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Acme Corp.",
    desc: "Innovative products for modern lifestyles.",
    logo: "/brand-logo.png",
  },
  {
    id: 2,
    name: "Glowify",
    desc: "Beauty and skincare for all.",
    logo: "/brand-logo2.png",
  },
  {
    id: 3,
    name: "FitFuel",
    desc: "Nutrition and supplements for athletes.",
    logo: "/brand-logo3.png",
  },
];

export default function BrandListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Find Brands</h1>
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
                  sizes="80px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{brand.name}</h2>
              <p className="text-gray-600 text-sm text-center">{brand.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
