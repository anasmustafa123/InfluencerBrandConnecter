"use client";

export default function AnalyticsView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">Campaign Analytics</h1>
        <p className="text-gray-600 mb-6">Analytics and performance data for your selected campaign will appear here. (Demo page)</p>
        <div className="flex flex-col gap-4">
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="font-semibold text-gray-800">Impressions</div>
            <div className="text-2xl text-indigo-600 font-bold">12,500</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="font-semibold text-gray-800">Engagement Rate</div>
            <div className="text-2xl text-pink-600 font-bold">5.8%</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="font-semibold text-gray-800">Conversions</div>
            <div className="text-2xl text-green-600 font-bold">320</div>
          </div>
        </div>
      </div>
    </div>
  );
}
