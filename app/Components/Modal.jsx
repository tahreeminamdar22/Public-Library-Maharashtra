"use client";
import React from "react";

export default function Modal({ onClose }) {
  return (
    <>
      {/* 🔲 Black overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-80 z-40"></div>

      {/* ⬜ White Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-gray-200 text-black rounded-lg shadow-2xl px-8 py-10 w-full max-w-md mx-auto border border-gray-200">

          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-800 text-lg font-bold hover:text-red-400 transition duration-200"
          >
            ✕
          </button>

          {/* 📌 Modal Heading */}
          <h2 className="text-2xl font-bold text-center mb-6">Choose Mode</h2>

          {/* 🎮 Action Buttons */}
          <div className="flex flex-col gap-4">
            {["Play", "Practice", "Test", "Study"].map((label, idx) => (
              <button
                key={idx}
                className="w-full border border-black text-black py-2 rounded-md hover:text-red-400  transition duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
