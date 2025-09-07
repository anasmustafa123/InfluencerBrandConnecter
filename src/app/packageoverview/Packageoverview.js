"use client"
import { FaComments } from "react-icons/fa";
import React, { useState } from "react";
import { BarChart2 } from "lucide-react";
import BudgetBreakdownModal from "./BudgetBreakdownModal";
import ChatModal from "./ChatModal";
import AnalyticsModal from "./AnalyticsModal";
import { useRouter } from "next/navigation";

export default function PackageOverview({ pkg, influencers }) {
  const router = useRouter();
  const [pressed, setPressed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatUser, setChatUser] = useState(null);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  console.log({realpackage: pkg});
  const analytics = [
    { id: 1, type: "Instagram Post", reach: 12000, views: 8000, conversions: 120 },
    { id: 2, type: "TikTok Video", reach: 18000, views: 15000, conversions: 200 },
  ];

  const content = [
    {
      id: 1,
      type: "Post",
      status: "Published",
      thumbnail: "https://via.placeholder.com/150",
      platform: "Instagram",
      influencerId: 1,
    },
    {
      id: 2,
      type: "Reel",
      status: "Scheduled",
      thumbnail: "https://via.placeholder.com/150",
      platform: "TikTok",
      influencerId: 2,
    },
  ];

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <a
          href="/packages"
          className="inline-flex items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow"
          aria-label="Go to Packages"
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
        </a>
      </div>

      <div className="absolute top-6 right-6 z-10">
        <a
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
        </a>
      </div>

      <div className="p-8 max-w-7xl mx-auto px-4 md:px-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          {pkg.title} Package Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Package Overview</h2>
            <p className="text-gray-600 mb-2">
              <strong>Campaign Duration:</strong> {pkg.days_duration}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Number of Influencers:</strong>{" "}
              {pkg.inf_num}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Estimated Reach:</strong> 120K - 150K
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Views:</strong> 480K
            </p>
            <p className="text-gray-600">
              <strong>Conversions:</strong> 1,200
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Budget & Spending</h2>
            <p className="mb-2">
              <strong>Current Spend:</strong> $2,300 / $5,000
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "46%" }}
              ></div>
            </div>
            <button
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-indigo-700"
              onClick={() => setBreakdownOpen(true)}
            >
              See Breakdown
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Influencer Progress</h2>
          <div className="space-y-4">
            {influencers.slice(0, pkg.inf_num).map((inf) => (
              <div
                key={inf.id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={inf.profilePic}
                    alt={inf.name}
                    className="w-12 h-12 rounded-full cursor-pointer"
                    onClick={() => router.push(`/influencerprofile/${inf.id}`)}
                    title={`Go to ${inf.name}'s profile`}
                  />
                  <div>
                    <p className="font-semibold">{inf.name}</p>
                    <p className="text-sm text-gray-500">{inf.platform}</p>
                  </div>
                </div>

                <div className="flex-1 mx-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    {inf.milestones.map((m, i) => (
                      <span key={i}>{m}</span>
                    ))}
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${((inf.currentMilestone + 1) /
                          inf.milestones.length) *
                          100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <button
                  className="text-indigo-600 hover:text-indigo-800"
                  onClick={() => {
                    setChatUser(inf);
                    setChatOpen(true);
                  }}
                  aria-label={`Chat with ${inf.name}`}
                >
                  <FaComments size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} influencer={chatUser} />

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">Content Provided</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {content.map((item) => {
              const inf = influencers.find(i => i.id === item.influencerId);
              return (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={`${item.type} thumbnail`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{item.type}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        item.status === 'Published' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.platform}</p>
                    {inf && <p className="text-xs text-gray-500 mt-1">By: {inf.name}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <button 
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center space-x-2"
            onClick={() => setAnalyticsOpen(true)}
          >
            <span>Track Analytics</span>
            <BarChart2 className="w-5 h-5" />
          </button>
        </div>
        <AnalyticsModal open={analyticsOpen} onClose={() => setAnalyticsOpen(false)} analytics={analytics} />
        <BudgetBreakdownModal open={breakdownOpen} onClose={() => setBreakdownOpen(false)} />
      </div>
    </>
  )
}