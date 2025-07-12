"use client";

import { useState } from "react";
import {
  FaLightbulb,
  FaBook,
  FaStickyNote,
  FaExclamationCircle,
  FaMagic,
  FaPenNib,
  FaVideo,
  FaUser,
  FaRobot,
  FaThumbsUp,
  FaThumbsDown,
  FaPrint,
  FaPaperPlane,
} from "react-icons/fa";

export default function IBookGPT() {
  const [input, setInput] = useState("");

  return (
    <div className="w-full flex flex-col h-full max-h-[100vh] max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          <span className="text-black">iBook</span>
          <span className="text-orange-500">GPT</span>
        </h1>
      </div>

      {/* Study Tools Dropdown */}
      <div className="mb-6">
        <details className="border rounded overflow-hidden">
          <summary className="bg-gray-100 px-4 py-3 cursor-pointer font-semibold flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Study tools
          </summary>
          <ul className="bg-white divide-y">
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaBook /> Chapter Summary
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaStickyNote /> Important Notes for Exams
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaStickyNote /> Revision Notes
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaExclamationCircle /> Common Mistakes
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaMagic /> Study Tricks
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaPenNib /> Create Definitions / Concepts
            </li>
            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer">
              <FaVideo /> Suggested Videos
            </li>
          </ul>
        </details>
      </div>

      {/* Chat Message Area */}
      <div className="flex flex-col gap-4 mb-4 flex-1">
        {/* AI Message */}
        <div className="flex items-start gap-2">
          <div className="bg-purple-600 text-white p-2 rounded-full">
            <FaRobot />
          </div>
          <div className="bg-purple-100 text-gray-800 p-3 rounded-lg max-w-[85%] text-sm">
            Hello! It seems you haven't asked a question yet. Please feel free to ask any question related to the chapter, and I’ll be happy to help you.
            <div className="flex gap-2 mt-2 text-gray-500">
              <FaThumbsUp className="cursor-pointer" />
              <FaThumbsDown className="cursor-pointer" />
              <FaPrint className="cursor-pointer ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-2 border rounded px-3 py-2 bg-gray-50">
        <input
          type="text"
          className="flex-1 outline-none bg-transparent"
          placeholder="Ask any question about the chapter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="text-purple-600 hover:text-purple-800">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
