"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterSidebar from "../Components/FilterSidebar";
import BookIframe from "../Components/BookIframe";
export default function Page() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const filters = [
    { title: "Year of Publication", options: ["2025", "2024", "2023", "2010", "2007"] },
    { title: "Mediums / Languages", options: ["Marathi", "Hindi", "English", "Urdu"] },
    { title: "Subjects", options: ["Math", "Science", "Civics", "Languages"] },
    { title: "Publisher", options: ["Balbharati", "NLB", "NCERT", "NIOS", "Other Publishers"] },
    { title: "Authors", options: ["Author A", "Author B", "Author C"] },
    { title: "ISSN / ISBN", options: ["123-4567890123", "987-6543210987"] },
    { title: "Content Types", options: ["open access", "premium"] },
    { title: "Content", options: ["ebooks", "videos", "articles"] },
  ];

  const allResources = [
    {
      title: "English Balbharti",
      image: "/assets/img/englishbalbharti.jpg",
      file: "/books/English-Balbharti.pdf",
      author: "Dr Sunil Magar",
      category: "Ebooks",
      edition: "1st Edition",
      publisher: "Vivek Uttam Gosavi",
      desc: "Textbook for students of English medium",
      aos: "fade-up",
    },
    {
      title: "Solar Cells",
      image: "/assets/img/solar.jpg",
      file: "/books/solar-cells.pdf",
      author: "Leonid A. Kosyachenko",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Solar cells dye-sensitized devices",
      aos: "zoom-in",
    },
    {
      title: "Power Quality",
      image: "/assets/img/power-quality.jpg",
      file: "/books/power-quality.pdf",
      author: "Ahmad Zobaa, Mario Manana Centali & Ramesh Bhansal",
      category: "Ebooks",
      edition: "2nd Edition",
      desc: "Power Quality Monitoring, Analysis & Enhancement",
      aos: "slide-up",
    },
    {
      title: "Advances In Biotechnology",
      image: "/assets/img/biotech.jpg",
      file: "/books/biotech.pdf",
      author: "Marian Petre",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Advances In Applied Biotechnology",
      aos: "flip-up",
    },
    {
      title: "Biodiversity",
      image: "/assets/img/biodiversity.jpg",
      file: "/books/biodiversity.pdf",
      author: "Adriano Sofo",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Career Awareness & Future Readiness",
      aos: "fade-down",
    },
    {
      title: "Biochemistry",
      image: "/assets/img/biochem.jpg",
      file: "/books/biochemistry.pdf",
      author: "Deniz Ekinci",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Life forms from genes to ecosystems",
      aos: "zoom-out",
    },
    {
      title: "Advances In Protein Kinases",
      image: "/assets/img/protein.jpg",
      file: "/books/protein-kinases.pdf",
      author: "Gabriela da Silva Xavier",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Enzymes regulating cellular functions",
      aos: "slide-left",
    },
  ];

  const [filteredResources, setFilteredResources] = useState(allResources);

  const applyFilters = (selected) => {
    console.log("Selected Filters:", selected);
    setFilteredResources(allResources); // Replace with actual filtering
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-10">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-96 md:sticky md:top-24 h-full z-10">
            <FilterSidebar
              filters={filters}
              onApply={applyFilters}
              onClear={() => setFilteredResources(allResources)}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8">
              Public Library Maharashtra Digital Knowledge Centre (PLMDKC)
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col h-[420px]"
                  data-aos={item.aos}
                  data-aos-delay={index * 100}
                >
                  <div className="h-[60%] w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fit rounded-t-xl"
                    />
                  </div>

                  <div className="h-[30%] px-4 py-3 flex flex-col justify-between">
                    <h3 className="text-base font-bold text-gray-900 truncate">{item.title}</h3>
                    <p className="text-sm text-gray-600 truncate">👤 {item.author}</p>
                    <p className="text-sm text-gray-600 truncate">📘 {item.category} • 📝 {item.edition}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                  </div>

                  <div className="h-[10%] w-full px-4 pb-4">
                    <a
                     href={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
                      target="_self"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-800 border border-indigo-800 rounded-md py-2 transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                    >
                      View →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
