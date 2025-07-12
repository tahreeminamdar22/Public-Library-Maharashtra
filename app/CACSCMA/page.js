"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Header, Footer} from "@/components";

export default function Page() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const testCards = [
    {
      title: "CA Foundation",
      description: "Practice mock tests curated for aspiring Chartered Accountants.",
      link: "./CA", 
      aos: "fade-up",
    },
    {
      title: "CMA Foundation",
      description: "Ace your Cost & Management Accounting entrance with these tests.",
      link: "./CMA",
      aos: "slide-up",
    },
    {
      title: "CS Executive",
      description: "Boost your Company Secretary prep with structured mock exams.",
      link: "./CS",
      aos: "flip-up",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center px-4 py-10 bg-gradient-to-b from-blue-50 to-white">
        
        {/* Hero Section */}
        <section className="text-black py-10 rounded-xl mb-10">
          <div className="max-w-2xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Best Mock Tests for CA CS CMA
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Get instant access to free CA, CS, and CMA mock test series
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testCards.map((card, idx) => (
            <div
              key={idx}
              data-aos={card.aos}
              data-aos-delay={idx * 100}
              className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 transition-all duration-300 border hover:border-indigo-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
              </div>
              <a
                href={card.link}
                className="mt-auto inline-block text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-800 border border-indigo-800 rounded-md py-2 px-4 transition-all duration-300"
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
