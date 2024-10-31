// components/AboutDescription.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutDescription = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-4 md:mb-12"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-base sm:text-lg leading-relaxed max-w-2xl text-white"
      >
        I am a full stack web developer with a passion for creating interactive and responsive web applications.
        I have experience working with JavaScript, React, Redux, Node.js, Express, MongoDb, MySql, HTML, CSS, and Git.
        I am a quick learner and I am always looking to expand my knowledge and skill set.
      </motion.p>
    </div>
  );
};

export default AboutDescription;
