"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSetupComplete = () => {
    // Assume you have a variable called 'role' that is either 'brand' or 'influencer'
    if (role === "brand") {
      router.push("/brandprofile");
    } else if (role === "influencer") {
      router.push("/influencerprofile");
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-indigo-500 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Setup Profile</h2>
          <ul className="space-y-4">
            <li className={step === 1 ? "font-bold underline" : ""}>
              User Information
            </li>
            <li className={step === 2 ? "font-bold underline" : ""}>
              Platforms
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2">📖 FAQ</p>
          <p>📞 Contact us</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white p-8 relative">
        {/* Skip button */}
        <button
          onClick={() => {
            if (role === "brand") {
              router.push("/brandprofile");
            } else if (role === "influencer") {
              router.push("/influencerprofile");
            }
          }}
          className="absolute top-4 right-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 shadow"
        >
          Skip
        </button>
        {step === 1 && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">User Information</h3>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Full Name"
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Email"
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Bio"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Platforms</h3>
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                placeholder="Instagram Handle"
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="TikTok Handle"
              />
              <input
                className="w-full p-2 border rounded"
                placeholder="Company Website (if brand)"
              />
            </div>
          </div>
        )}

        {/* Progress bar under inputs */}
        <div className="mt-10">
          <div className="relative w-full">
            {/* Full bar */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded"></div>

            {/* Filled bar */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-indigo-300 -translate-y-1/2 transition-all rounded"
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>

            {/* Tracking circle */}
            <div
              className="absolute top-1/2 w-6 h-6 bg-indigo-400 rounded-full border-4 border-white shadow -translate-y-1/2 transition-all"
              style={{ left: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Previous
            </button>
          )}
          {step < 2 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-indigo-400 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSetupComplete}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Finish Setup
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
