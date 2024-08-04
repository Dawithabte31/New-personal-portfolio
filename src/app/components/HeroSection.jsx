"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 align-middle align-middle ">
        <motion.div
          initial={{ opacity: 2, scale: 0.5 }}
          animate={{ opacity: 3, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
              Hello, I&apos;m Dawit{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                100,
                "UI/UX Designer",
                100,
              ]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
            />
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>

            <a
              href="/Dawit Habitamu Tewonde (2).pdf"
              download="Dawit Habitamu Tewonde (2).pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
             >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
