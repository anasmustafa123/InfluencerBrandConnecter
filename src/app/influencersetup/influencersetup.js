"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InfluencerSetupPage(props) {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const router = useRouter();

  const togglePlatform = (platform) => {
    if (selectedPlatforms.some(p => p.name === platform.name)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p.name !== platform.name));
    } else {
      setSelectedPlatforms([...selectedPlatforms, { ...platform, username: "" }]);
    }
  };

  const handleUsernameChange = (key, value) => {
    setSelectedPlatforms(selectedPlatforms.map(p => p.name === key ? { ...p, username: value } : p));
  };

  const handleRemove = (key) => {
    setSelectedPlatforms(selectedPlatforms.filter(p => p.name !== key));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Influencer Data:", selectedPlatforms);
    for (let i = 0; i < selectedPlatforms.length; i++) {
      
    }
    router.push("/influencerprofile");
    // Submit to backend here
  };

  const handleSkip = () => {
    console.log("Skipped setup");
    router.push("/influencerprofile");
    // Redirect or mark setup as skipped in backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-white flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Influencer Setup</h1>
        <button
          type="button"
          onClick={handleSkip}
          className="position absolute top-4 right-4 px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gray-400 transition-all duration-200"
        >
          Skip Setup
        </button>
        <div className="mb-8">
          <h2 className="text-xl text-center font-semibold mb-5 text-gray-700">Select Platforms</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {props.platforms.map(platform => (
              <button
                key={platform.name}
                className={`px-5 py-3 rounded-full font-semibold transition-all duration-200 shadow-md
                  ${selectedPlatforms.some(p => p.name === platform.name)
                    ? "bg-purple-600 text-white transform scale-105 shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-purple-100 hover:text-purple-700"
                  }`}
                onClick={() => togglePlatform(platform)}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {selectedPlatforms.map(platform => (
              <div key={platform.name} className="relative bg-purple-50 p-5 rounded-xl shadow-inner border border-purple-200">
                <button
                  type="button"
                  onClick={() => handleRemove(platform.name)}
                  className="absolute top-3 right-3 text-red-500 font-bold hover:text-red-600"
                >
                  ✕
                </button>

                <h3 className="font-semibold mb-3 text-purple-700 text-lg">{platform.name}</h3>
                <label className="block text-gray-700 mb-2">
                  Username:
                  <input
                    type="text"
                    value={platform.username}
                    onChange={(e) => handleUsernameChange(platform.name, e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder={`Enter your ${platform.name} username`}
                    required
                  />
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            {selectedPlatforms.length > 0 && (
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition-all duration-200"
              >
                Save Setup
              </button>
            )}

            
          </div>
        </form>

        {selectedPlatforms.length === 0 && (
          <p className="mt-6 text-center text-gray-500">Select a platform above to start adding your accounts or skip setup.</p>
        )}
      </div>
    </div>
  );
}
