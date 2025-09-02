import React from "react";

export default function AnalyticsModal({ open, onClose, analytics }) {
  if (!open) return null;
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity visible opacity-100" style={{ background: "none" }}>
      <div className="bg-white rounded-lg shadow-lg p-8 relative w-[90vw] max-w-2xl md:w-[60vw] md:max-w-3xl">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4">Content Analytics</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b">Type</th>
              <th className="py-2 px-3 border-b">Reach</th>
              <th className="py-2 px-3 border-b">Views</th>
              <th className="py-2 px-3 border-b">Conversions</th>
            </tr>
          </thead>
          <tbody>
            {analytics.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-3 border-b">{item.type}</td>
                <td className="py-2 px-3 border-b">{item.reach.toLocaleString()}</td>
                <td className="py-2 px-3 border-b">{item.views.toLocaleString()}</td>
                <td className="py-2 px-3 border-b">{item.conversions.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
