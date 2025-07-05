"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FilterSidebar from "../Components/FilterSidebar";

export default function Page() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  const filters = [
    { title: "Year of Publication", options: ["2025", "2024", "2023", "2010", "2007"] },
    { title: "Mediums / Languages", options: ["Marathi", "Hindi", "English", "Urdu"] },
    { title: "Subjects", options: ["Math", "Science", "Civics", "Languages"] },
    { title: "Publisher", options: ["Balbharati", "NLB", "NCERT", "NIOS", "Other Publishers"] },
    { title: "Authors", options: ["Author A", "Author B", "Author C"] },
    { title: "ISSN / ISBN", options: ["123-4567890123", "987-6543210987"] },
    { title: "Content Types:", options: ["open access", "premium"] },
    { title: "Content:", options: ["ebooks", "videos", "articles"] },
  ];

  const allResources = [
    {
      title: "English Balbharti",
      image: "/assets/img/english-balbharti.jpg",
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
      aos: "fade-up",
    },
    {
      title: "Power Quality",
      image: "/assets/img/power-quality.jpg",
      file: "/books/power-quality.pdf",
      author: "Ahmad Zobaa, Mario Manana Centali & Ramesh Bhansal",
      category: "Ebooks",
      edition: "2nd Edition",
      desc: "Power Quality Monitoring, Analysis & Enhancement",
      aos: "fade-up",
    },
    {
      title: "Advances In Biotechnology",
      image: "/assets/img/biotech.jpg",
      file: "/books/biotech.pdf",
      author: "Marian Petre",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Advances In Applied Biotechnology",
      aos: "fade-up",
    },
    {
      title: "Biodiversity",
      image: "/assets/img/biodiversity.jpg",
      file: "/books/biodiversity.pdf",
      author: "Adriano Sofo",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Career Awareness & Future Readiness",
      aos: "fade-up",
    },
    {
      title: "Biochemistry",
      image: "/assets/img/biochem.jpg",
      file: "/books/biochemistry.pdf",
      author: "Deniz Ekinci",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Life forms from genes to ecosystems",
      aos: "fade-up",
    },
    {
      title: "Advances In Protein Kinases",
      image: "/assets/img/protein.jpg",
      file: "/books/protein-kinases.pdf",
      author: "Gabriela da Silva Xavier",
      category: "Ebooks",
      edition: "1st Edition",
      desc: "Enzymes regulating cellular functions",
      aos: "fade-up",
    },
  ];

  const [filteredResources, setFilteredResources] = useState(allResources);

  const applyFilters = (selected) => {
    console.log("Selected Filters:", selected);
    setFilteredResources(allResources); // Add real filtering logic here
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-96 md:sticky md:top-24 h-fit z-10">
            <FilterSidebar
              filters={filters}
              onApply={applyFilters}
              onClear={() => setFilteredResources(allResources)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8">
              Public Library Maharashtra Digital Knowledge Centre (PLMDKC)
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4"
                  data-aos={item.aos}
                  data-aos-delay={index * 100}
                >
                  <div className="min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.author}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.edition}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    
                  <a
  href={`${item.file}#toolbar=0&navpanes=0&scrollbar=0`}
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
        </div>
      </main>
      <Footer />
    </>
  );
}
