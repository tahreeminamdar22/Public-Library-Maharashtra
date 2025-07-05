"use client";
import React, { useState } from "react";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    <div className="w-full md:w-96">
      {/* Mobile Toggle Button */}
      <div className="md:hidden mb-4 px-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          <span className="flex items-center gap-2 font-semibold">
            <FaFilter /> {isOpen ? "Hide Filters" : "Show Filters"}
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block transition-all duration-300 ease-in-out`}
      >
        <aside className="bg-white border border-gray-200 shadow-lg rounded-xl px-6 py-6 space-y-6 md:sticky md:top-24">
          <h2 className="text-xl font-bold text-blue-700 pb-2 border-b">Filter Books</h2>

          {filters.length > 0 ? (
            filters.map(({ title, options }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow transition"
              >
                <h3 className="text-md font-semibold text-gray-800 mb-3">{title}</h3>
                <ul className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {options.map((option) => (
                    <li key={option} className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        id={`${title}-${option}`}
                        checked={selectedFilters[title]?.includes(option) || false}
                        onChange={() => handleOptionChange(title, option)}
                        className="accent-blue-600 cursor-pointer"
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
          <div className="pt-4 border-t flex flex-col gap-3">
            <button
              onClick={handleApply}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              Apply Filters
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition"
            >
              Clear All
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
