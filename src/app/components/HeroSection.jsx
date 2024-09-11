"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
 
const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
          <section className=" mx-auto bg-transparent w-[100%]  flex items-center justify-center h-screen">
      <div className="max-w-2xl bg-transparent text-center">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center "
         >
          <p className="text-white mb-4 text-2xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Hello, I&apos;m Dawit
            </span>
            <br />
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/#contact"
              className="w-[25%] py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/Dawit Habitamu Tewonde (2).pdf"
              download="Dawit Habitamu Tewonde (2).pdf"
              className="w-[25%] py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <div className="flex flex-row justify-center gap-4"><p>Download CV </p> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg></div>
             
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </BackgroundBeamsWithCollision>
  );
}
export default HeroSection;