"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header, Footer } from "@/components";



export default function Page() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const testCards = [
    {
      title: "Class 10 - Mathematics",
      description: "Sharpen your math skills with these chapter-wise Class 10 mock tests.",
      link: "./CA",
      aos: "fade-up",
    },
    {
      title: "Class 10 - Science",
      description: "Test your knowledge of Physics, Chemistry, and Biology for Class 10.",
      link: "./CMA",
      aos: "slide-up",
    },
    {
      title: "Class 10 - Social Science",
      description: "Practice History, Civics, Geography, and Economics for Class 10.",
      link: "./CS",
      aos: "flip-up",
    },
    {
      title: "Class 09 - Mathematics",
      description: "Practice algebra, geometry, and more for Class 9 Mathematics.",
      link: "./CA",
      aos: "fade-down",
    },
    {
      title: "Class 09 - Science",
      description: "Concept-based tests covering Class 9 Physics, Chemistry, and Biology.",
      link: "./CMA",
      aos: "slide-left",
    },
    {
      title: "Class 09 - Social Science",
      description: "Get ready for SST with topic-wise tests aligned to CBSE syllabus.",
      link: "./CS",
      aos: "zoom-in",
    },
    {
      title: "Class 08 - Mathematics",
      description: "Revise key concepts and practice problems for Class 8 Maths.",
      link: "./CA",
      aos: "fade-down",
    },
    {
      title: "Class 08 - Science",
      description: "Cover core chapters with MCQs from Class 8 Science curriculum.",
      link: "./CMA",
      aos: "slide-right",
    },
    {
      title: "Class 08 - Social Science",
      description: "Practice questions from Civics, History, and Geography - Class 8.",
      link: "./CS",
      aos: "flip-right",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-4 py-12 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mb-14 px-4" data-aos="fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-500 mb-4 leading-tight">
            Free CBSE Mock Tests for Class 8, 9, and 10
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Topic-wise test series crafted for CBSE students. Practice anytime, no sign-up needed.
          </p>
        </section>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {testCards.map((card, idx) => (
            <div
              key={idx}
              data-aos={card.aos}
              data-aos-delay={idx * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-indigo-400 transition-all duration-300 p-6 flex flex-col"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              <a
                href={card.link}
                className="mt-6 inline-block bg-indigo-600 text-white font-medium text-sm text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition"
              >
                Explore Tests
              </a>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
