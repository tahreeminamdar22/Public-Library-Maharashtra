'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Header, Footer} from "@/components";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-10 px-4 flex flex-col items-center justify-start gap-12">

        {/* QUOTE BOX */}
        <div className="bg-[#c97725] text-white text-center px-6 py-5 rounded-md shadow-lg max-w-lg w-full hover:bg-[#ff9a02] scale-95 transition-transform duration-100" data-aos="slide-right">
          <p className="italic text-lg leading-relaxed">
            “Reading is not just an escape. It is access to a better way of life, a deeper understanding of the world,
            and a constant source of ideas that shape our minds and hearts.”
          </p>
          <p className="mt-3 font-semibold">– Oprah Winfrey</p>
        </div>

        {/* DAILY INSPIRATION BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#c78117] hover:bg-[#ff9a02] text-white font-medium px-6 py-2 rounded-md transition duration-300 shadow"
          data-aos="flip-down"
          data-aos-delay="100"
        >
          🌞 Daily Inspiration
        </button>

        {/* HERO SECTION */}
        <section className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-12 py-10 gap-10">
          {/* TEXT SECTION */}
          <div className="lg:w-1/2 text-left" data-aos="fade-right">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Expand Your Mind, Read a Book
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Books are magical. They can teach us, transform us, heal us, make us feel safe,
              push us out of our comfort zone, and make us feel like we know people and places that never existed before.
              Books make us feel at home. <strong>Writers make us feel <em>understood</em></strong>.
            </p>
            <Link href="/home">
              <button className="bg-[#c78117] hover:bg-[#ff9a02] text-white px-6 py-3 rounded-md text-sm font-semibold transition duration-300">
                Exploring Why, How & What
              </button>
            </Link>
          </div>

          {/* IMAGE SECTION */}
          <div className="lg:w-1/2 w-full" data-aos="slide-up">
            <img
              src="/assets/img/li.png"
              alt="Library Room Illustration"
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* MODAL OVERLAY */}
        {showModal && (
          <div className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center border-b pb-3">
                <h5 className="text-xl font-semibold">Daily Inspiration</h5>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                  &times;
                </button>
              </div>
              <div className="py-5">
                <p className="text-lg mb-3">📖 “A reader lives a thousand lives before he dies... The man who never reads lives only one.”</p>
                <p className="text-sm text-gray-500">&ndash; George R.R. Martin</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
