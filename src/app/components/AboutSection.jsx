"use client";

import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col gap-6 justify-center flex-wrap">
        <div className="flex flex-row gap-4 justify-center flex-wrap">
        <p className="rounded-2xl px-2 border-2 p-1 flex items-center">HTML</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">CSS</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">JavaScript</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">TypeScript</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">React.js</p>
        
        </div>
        <div className="flex flex-row gap-4 justify-center flex-wrap">
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">Nextjs</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">Node.js</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">Express.js</p>
        <p className="rounded-2xl px-2 border-2  p-1 flex items-center">Laravel</p>

        </div>
      
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering Student at Wollo University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>2024 Hackathon Participation Certificate</li>
        <li>Wollo University Certificate for Project Show</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mx-auto py-16 flex items-center justify-center max-h-screen mb-[100px]">
      <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg ">
        <div className="text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base lg:text-lg mb-8 "
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDb,
            MySql, HTML, CSS, and Git. I am a quick learner and I am always
            {/* looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
          </motion.p>
          <div className="flex space-x-4 mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
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
      </div>
    </section>
  );
};

export default AboutSection;
