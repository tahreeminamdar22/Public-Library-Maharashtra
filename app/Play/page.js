"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [gameSound, setGameSound] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 100, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <Header />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-80 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="relative w-full max-w-md mx-auto">
          
          {/* Floating Heading */}
          <div className="absolute -top-16 w-full text-center">
            <h2 className="text-2xl font-bold text-white">Current Affairs MCQs</h2>
            <p className="text-sm text-gray-200 mt-1">15 Questions</p>
          </div>

          {/* Modal Box */}
          <div className="bg-white text-black rounded-xl shadow-2xl px-6 py-8 w-full border border-gray-200 space-y-5">
            
            {/* Timer + Game Sound Toggle */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-sm">
                Timer:
                <select
                  name="selectedTime"
                  className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="15secs">15 secs</option>
                  <option value="30secs">30 secs</option>
                  <option value="60secs">60 secs</option>
                </select>
              </label>

              {/* Game Sound Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Game Sound:</span>
                <button
                  onClick={() => setGameSound(!gameSound)}
                  className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    gameSound ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      gameSound ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            {/* Language Selector */}
            <div>
              <select
                name="selectedlang"
                defaultValue=""
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  Select Preferred Language
                </option>
                <option value="hindi">Hindi</option>
                <option value="english">English</option>
              </select>
            </div>

            {/* Question Mode */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="allQuestions"
                  name="questionMode"
                  value="all"
                  checked={selectedOption === "all"}
                  onChange={() => setSelectedOption("all")}
                  className="accent-green-600 w-4 h-4"
                />
                <label htmlFor="allQuestions" className="text-sm text-gray-700 font-medium">
                  ✅ Take all questions
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="limitedQuestions"
                  name="questionMode"
                  value="limited"
                  checked={selectedOption === "limited"}
                  onChange={() => setSelectedOption("limited")}
                  className="accent-green-600 w-4 h-4"
                />
                <label htmlFor="limitedQuestions" className="text-sm text-gray-700 font-medium">
                  ⚪ Take limited questions
                </label>
              </div>
            </div>

            {/* Limited Questions Input */}
            {selectedOption === "limited" && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Choose the number of questions
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g. 5, 10, 15"
                  />
                </div>

                <p className="text-sm text-gray-600 text-center">OR</p>

                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="From"
                    className="w-1/2 border border-gray-300 rounded px-3 py-2"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    className="w-1/2 border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex justify-between">
              <button className="px-6 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 transition">
                Cancel
              </button>
              <button className="px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
