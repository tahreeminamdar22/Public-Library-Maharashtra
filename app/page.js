'use client'; 
import Image from "next/image";
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './globals.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // you can customize animation duration
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Header />
      <div className="container mx-auto px-4 py-10" data-aos="fade-up" data-aos-delay="100">
  <div className="flex flex-col lg:flex-row items-center gap-10 py-10">
    
    {/* IMAGE SECTION */}
    <div className="w-full sm:w-4/5 lg:w-1/2" data-aos="slide-up">
      <img
        src="./assets/img/li.png"
        alt="Library Image"
        className="mx-auto lg:ml-auto w-full h-auto object-cover"
        width="700"
        height="500"
        loading="lazy"
      />
    </div>

    {/* TEXT SECTION */}
    <div className="w-full lg:w-1/2" data-aos="fade-right">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
        Expand Your Mind, Read a Book
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Books are magical. They can teach us, transform us, heal us, make us feel safe,
        push us out of our comfort zone, and make us feel like we know people and places that never existed before.
        Books make us feel at home. <b>Writers make us feel <i>understood</i></b>.
      </p>
      <div className="flex justify-start">
        <Link href="/home">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition duration-300">
            Exploring Why, How & What
          </button>
        </Link>
      </div>
    </div>
    
  </div>
</div>
<Footer  />
</>
   
  );
}
