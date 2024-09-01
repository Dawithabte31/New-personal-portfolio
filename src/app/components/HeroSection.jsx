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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
              Hello, I&apos;m Dawit
            </span>
            <br />
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/Dawit Habitamu Tewonde (2).pdf"
              download="Dawit Habitamu Tewonde (2).pdf"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </BackgroundBeamsWithCollision>
  );
}
export default HeroSection;