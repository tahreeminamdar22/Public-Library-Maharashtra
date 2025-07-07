"use client";
import React, { useState } from "react";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiCheckSquare, FiXCircle } from "react-icons/fi";

const getIconForTitle = (title) => {
  if (title.toLowerCase().includes("year")) return "📅";
  if (title.toLowerCase().includes("language")) return "🗣️";
  if (title.toLowerCase().includes("subject")) return "📚";
  if (title.toLowerCase().includes("publisher")) return "🏢";
  if (title.toLowerCase().includes("author")) return "✍️";
  if (title.toLowerCase().includes("isbn")) return "🔢";
  if (title.toLowerCase().includes("type")) return "🔓";
  if (title.toLowerCase().includes("content")) return "📁";
  return "📝";
};

export default function FilterSidebar({ filters = [], onApply, onClear }) {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isOpen, setIsOpen] = useState(false); // for mobile toggle

  const handleOptionChange = (title, option) => {
    setSelectedFilters((prev) => {
      const current = prev[title] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [title]: updated };
    });
  };

  const handleApply = () => {
    onApply && onApply(selectedFilters);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedFilters({});
    onClear && onClear();
  };

  return (
    <div className="w-full md:w-80">
      {/* Mobile Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all"
        >
          <span className="flex items-center gap-2 font-semibold">
            <FaFilter /> {isOpen ? "Hide Filters" : "Show Filters"}
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? "block" : "hidden"} md:block transition-all duration-300 ease-in-out`}>
        <aside className="bg-white border border-gray-200 shadow-lg rounded-xl p-5 space-y-6 md:sticky md:top-24">
          <div className="pb-3 border-b border-gray-200">
            <h2 className="text-lg font-bold text-indigo-600">📚 Filter Books</h2>
          </div>

          {filters.length ? (
            filters.map(({ title, options }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span>{getIconForTitle(title)}</span>
                  {title}
                </h3>
                <ul className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto custom-scrollbar">
                  {options.map((option) => (
                    <li key={option} className="w-[48%] flex items-center  gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        id={`${title}-${option}`}
                        checked={selectedFilters[title]?.includes(option) || false}
                        onChange={() => handleOptionChange(title, option)}
                        className="accent-indigo-600 h-4 w-4 cursor-pointer transform transition-transform duration-150 hover:scale-110"
                      />
                      <label htmlFor={`${title}-${option}`} className="cursor-pointer">
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No filters available.</p>
          )}

          {/* Buttons */}
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
            <button
              onClick={handleApply}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
            >
              <FiCheckSquare className="text-lg" /> Apply Filters
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <FiXCircle className="text-lg" /> Clear All
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
