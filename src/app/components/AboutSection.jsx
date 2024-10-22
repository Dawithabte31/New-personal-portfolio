"use client"; // Mark the component as a client-side component

import React, { useTransition, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col gap-6 justify-center flex-wrap"
      >
        <div className="flex flex-row gap-4 justify-center flex-wrap w-[100%]">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            HTML
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            CSS
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            JavaScript
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            TypeScript
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            React.js
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer "
          >
            Next.js
          </motion.p>
        </div>
        <div className="flex flex-row gap-4 justify-center flex-wrap">
        
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            Node.js
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            Express.js
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#ADB7BE] border-white hover:border-white rounded-full border-2 px-6 py-3 text-xl cursor-pointer"
          >
            Laravel
          </motion.p>
        </div>
      </motion.div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isInView, setIsInView] = useState(false);
  const aboutSectionRef = useRef(null);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  // Trigger animation when hash changes to #about
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        setIsInView(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="text-white w-full mx-auto py-16 flex items-center justify-center max-h-screen mb-[100px] h-screen"
    >
        <div className="text-center flex w-[70%] flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-base lg:text-lg mb-8 w-[70%] "
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDb,
            MySql, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </motion.p>
          <div className="flex space-x-4 mb-8">
            <h1
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="font-bold text-4xl"
            >
              Skills
            </h1>
          </div>
          <AnimatePresence>
            <motion.div
              key={tab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
    </section>
  );
};

export default AboutSection;
