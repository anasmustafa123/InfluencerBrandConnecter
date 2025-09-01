import React from "react";

export default function ChatModal({ open, onClose, influencer }) {
  if (!open || !influencer) return null;
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
        <h3 className="text-lg font-bold mb-4">Chat with {influencer.name}</h3>
        <div className="h-48 bg-gray-50 rounded p-4 mb-4 overflow-y-auto flex flex-col gap-2">
          {/* Example chat messages */}
          <div className="self-start bg-indigo-100 px-3 py-2 rounded-lg max-w-xs">Hi, can you send the draft?</div>
          <div className="self-end bg-gray-200 px-3 py-2 rounded-lg max-w-xs">Sure! I'll send it by tomorrow.</div>
        </div>
        <form className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type a message..."
            disabled
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded" disabled>Send</button>
        </form>
      </div>
    </div>
  );
}
