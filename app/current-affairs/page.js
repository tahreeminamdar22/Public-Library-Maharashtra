"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {Header, Footer, Modal, Month} from "@/components"; 

export default function Page() {
  const [filter, setFilter] = useState("Daily");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const quizData = [
    {
      date: "Jul 3, 2025",
      topics: "ISRO Moon Mission, G20 Delhi Summit, IPL Awards",
      type: "Daily",
    },
    {
      date: "Jul 2, 2025",
      topics: "Wimbledon Finals, RBI Repo Rate Update, Chandrayaan-4 Prep",
      type: "Daily",
    },
    {
      date: "Jul 1, 2025",
      topics: "Union Budget 2025 Highlights, NASA’s Mars Base, Digital India Milestone",
      type: "Daily",
    },
    {
      date: "Jul 1 – Jul 7, 2025",
      topics: "New Education Bill, EU Climate Deal, Copa America Wrap-up",
      type: "Weekly",
    },
    {
      date: "Jun 24 – Jun 30, 2025",
      topics: "Startup India Awards, Indo-Pacific Talks, JEE Results",
      type: "Weekly",
    },
    {
      date: "Jun 17 – Jun 23, 2025",
      topics: "India-China Border Updates, Wimbledon Build-up, AI Regulation Bill",
      type: "Weekly",
    },
    {
      date: "Jun 2025",
      topics: "GST Council Decisions, Monsoon Forecast, Global Stock Trends",
      type: "Monthly",
    },
    {
      date: "May 2025",
      topics: "Lok Sabha Polls Recap, UN Climate Report, Cannes Film Fest",
      type: "Monthly",
    },
  ];

  const filteredData = quizData.filter((q) => q.type === filter);

  return (
    <>
      <Header />

      <main className="min-h-screen px-4 py-10 bg-gradient-to-b from-blue-50 to-white text-center">
  {filter !== "Monthly" && (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Current Affairs</h1>
      <p className="text-lg text-gray-600 mb-8">
        Stay updated with the latest news and events.
      </p>
      <div className="flex space-x-4 justify-center mb-10">
        {["Daily", "Weekly", "Monthly"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
              filter === type
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  )}

  {/* Conditional Component Display */}
  {filter === "Monthly" ? (
    <Month />
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
      {filteredData.map((quiz, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105"
          data-aos="flip-left"
          data-aos-delay={index * 100}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{quiz.date}</h3>
          <p className="text-sm text-gray-500 mb-4">Topics: {quiz.topics}</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full"
          >
            Take Quiz 🧠
          </button>
        </div>
      ))}
    </div>
  )}
</main>

      

      {/* Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <Footer />
    </>
  );
}
