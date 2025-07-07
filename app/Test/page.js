"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const tests = [
  {
    title: "CA CS CMA",
    desc: "Professional exams for commerce students.",
    logo: "/assets/img/ca.png",
    link: "./CACSCMA",
    aos: "fade-up",
  },
  {
    title: "CBSE",
    desc: "Mock tests from class 6th to 12th.",
    logo: "/assets/img/cbse.png",
    link: "#",
    aos: "flip-up",
  },
  {
    title: "Competitive Exams",
    desc: "UPSC, SSC, Railways & more.",
    logo: "/assets/img/competitive.jpg",
    link: "#",
    aos: "zoom-out",
  },
  {
    title: "CUET",
    desc: "UG entrance test practice series.",
    logo: "/assets/img/cuet.png",
    link: "#",
    aos: "slide-left",
  },
  {
    title: "Olympiad",
    desc: "Practice for SOF and other olympiads.",
    logo: "/assets/img/olympaid.jpg",
    link: "#",
    aos: "fade-down",
  },
  {
    title: "NEET",
    desc: "Medical entrance mock tests.",
    logo: "/assets/img/neet.jpg",
    link: "#",
    aos: "flip-right",
  },
];

export default function MockTests() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="py-10 bg-gradient-to-br from-white to-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 underline decoration-4 animate-pulse mb-10">
            🧠 Best Mock Tests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tests.map((test, i) => (
              <div
                key={i}
                className="relative group [perspective:1000px] h-72 w-full"
                data-aos={test.aos}
                data-aos-delay={i * 100}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col justify-start items-center gap-3 p-4 backface-hidden">
                    <img
                      src={test.logo}
                      alt={test.title}
                      className="w-full h-[70%] object-contain rounded-md"
                    />
                    <h3 className="text-md font-semibold mt-2">{test.title}</h3>
                    <span className="text-gray-400 text-xs">Tap to view</span>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full bg-purple-600 text-white rounded-xl flex flex-col justify-center items-center text-center px-4 py-6 rotate-y-180 backface-hidden">
                    <p className="text-sm mb-4">{test.desc}</p>
                    <a
                      href={test.link}
                      className="bg-white text-purple-700 px-4 py-2 text-sm font-medium rounded hover:bg-gray-200 transition"
                    >
                      Start Test →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
