"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="mx-auto bg-transparent w-full flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-transparent text-center w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-[#BDC6CC] text-sm sm:text-lg mb-6 lg:text-xl">
              <span className="block text-white mb-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                  Hello, I&apos;m Dawit
                </span>
              </span>

              <span className="text-white text-lg sm:text-2xl lg:text-3xl font-sans">
                <span className="font-light text-gray-300">
                  , a Full Stack Developer. I love crafting websites and apps
                  that combine seamless functionality with great design,
                  ensuring a
                </span>
                <span className="font-bold text-gray-400"> smooth and</span>
                <span className="font-bold text-gray-400">
                  {" "}
                  engaging user experience
                </span>
                .
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link
                href="/#contact"
                className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] py-2 sm:py-3 md:py-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white transition-transform duration-300 ease-in-out hover:scale-[105%] hover:bg-slate-800"
              >
                Contact Me
              </Link>

              <a
                href="/Dawit Habitamu Tewonde (2).pdf"
                download="Dawit Habitamu Tewonde (2).pdf"
                className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] py-2 sm:py-3 md:py-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white transition-transform duration-300 ease-in-out hover:scale-[105%] hover:bg-slate-800"
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  <p className="text-lg sm:text-xl lg:text-2xl">Download CV</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};
export default HeroSection;
