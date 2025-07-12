"use client";
import { Header, Footer } from "@/components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function page() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);
  const resources = [
    {
      title: "Ebooks",
      icon: "fas fa-book-open",
      color: "text-blue-600",
      desc: "Generic | Academic | Competitive Exams",
      link: "/e-books",
      aos: "fade-in",
    },
    {
      title: "Test Series",
      icon: "fas fa-pencil-alt",
      color: "text-red-600",
      desc: "NEET | JEE | UPSC | SSC | Banking | Railways",
      link: "/test-series",
      aos: "Zoom-in",
    },
    {
      title: "Current Affairs",
      icon: "fas fa-newspaper",
      color: "text-green-600",
      desc: "UPSC | SSC | Defence | State PSCs",
      link: "/current-affairs",
      aos: "fade-left",
    },
    {
      title: "High School",
      icon: "fas fa-brain",
      color: "text-purple-600",
      desc: "Career Awareness & Future Readiness | Digital Literacy & Tech Skills | Language ... & more",
      link: "/high-school",
      aos: "fade-in",
    },
    {
      title: "Job Training Videos",
      icon: "fas fa-film",
      color: "text-black-600",
      desc: "Skills Training Videos & more",
      link: "/job-training",
      aos: "flip-up",
    },
    {
      title: "Science & Technology",
      icon: "fas fa-flask",
      color: "text-pink-600",
      desc: "Discoveries | News | Docs | Research",
      link: "/science-technology",
      aos: "flip-down",
    },
  ];
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-700 mb-6">
            📚 Public Library Maharashtra Digital Knowledge Centre (PLMDKC)
          </h1>
          <h2 className="text-center text-md sm:text-lg font-bold text-blue-500 mb-4">
            सार्वजनिक पुस्तकालय महाराष्ट्र, अंकीय ज्ञान केंद्र
          </h2>
          <p className="text-center text-md sm:text-lg font-bold text-blue-500 mb-4">
            1 to 100, We’ve Got a Book for Every Curious Kids, Dreamy Teens,
            Busy Adults & Wise Souls!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {resources.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
                data-aos={item.aos}
                data-aos-delay={index * 100}
              >
                <div className={`text-3xl mb-4 ${item.color}`}>
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <button className="w-full">
                  <Link
                    href={item.link}
                    target="_self"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-400 text-black text-sm font-medium px-10 py-2 rounded hover:bg-yellow-500 text-center"
                  >
                    View Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
