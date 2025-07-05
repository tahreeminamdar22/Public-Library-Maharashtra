"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Page() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  const resources = [
    {
      title: "Solar Cells",
      image: "/assets/img/solar.jpg",
       author: "Leonid A. Kosyachenko",
      desc: "Solar cells dye-sensitized devices",
      
      link: "./EBooks",
      aos: "fade-in",
    },
    {
      title: "power Quality",
      image: "/assets/img/power-quality.jpg",
       author: "Ahmad Zobaa, Mario Manana Centali & Ramesh Bhansal",
      desc: "Power Quality Monitoring, Analysis & Enhancement",
      link: "https://nlbdkc.noeticindia.com/mocktests",
      aos: "zoom-in",
    },
    {
      title: "Advances In Biotechnology",
      image: "/assets/img/biotech.jpg",
      author: "Marian Petre",
      desc: "Advances In Applied Biotechnology",
      link: "https://nlbdkc.noeticindia.com/current-affairs",
      aos: "slide-down",
    },
    {
      title: "Biodiversity",
      image: "/assets/img/biodiversity.jpg",
      author: "Adriano Sofo",
      desc:
        "Career Awareness & Future Readiness | Digital Literacy & Tech Skills | Language ... & more",
      link: "https://nlbdkc.noeticindia.com/digitalLibrary/showCategory/129",
      aos: "fade-up",
    },
     {
      title: "Biochemestry",
      image: "/assets/img/biochem.jpg",
      author: "Deniz Ekinci",
      desc:"The variety of life forms on Earth, from genes to entire ecosystems, vital for ecological balance.",
      link: "https://nlbdkc.noeticindia.com/digitalLibrary/showCategory/129",
      aos: "zoom-out",
    },
     {
      title: "Advances  In Protein Kinases",
      image: "/assets/img/protein.jpg",
      author: "Gabriela da Silva Xavier",
      desc:"Enzymes that regulate cellular functions by adding phosphate groups to proteins.",
      link: "https://nlbdkc.noeticindia.com/digitalLibrary/showCategory/129",
      aos: "slide-up",
    },
  ];

  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-left text-5xl sm:text-4xl font-extrabold text-blue-700 mb-10 hover:animate-bounce">
             National Library Vandre
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                data-aos={item.aos}
                data-aos-delay={index * 100}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.author}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_self"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-blue-600 mt-2 hover:underline"
                  >
                    View →
                  </a>
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
