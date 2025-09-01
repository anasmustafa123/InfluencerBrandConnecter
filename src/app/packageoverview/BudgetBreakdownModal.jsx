import React from "react";

export default function BudgetBreakdownModal({ open, onClose }) {
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
        <h3 className="text-lg font-bold mb-4">Budget Breakdown</h3>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>Influencer Fees</span><span>$2,000</span></li>
          <li className="flex justify-between"><span>Content Production</span><span>$800</span></li>
          <li className="flex justify-between"><span>Platform Ads</span><span>$1,200</span></li>
          <li className="flex justify-between"><span>Management Fees</span><span>$1,000</span></li>
        </ul>
      </div>
    </div>
  );
}
