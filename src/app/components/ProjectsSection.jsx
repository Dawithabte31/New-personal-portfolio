"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wollo University Techino Club Website",
    description:
      "A MERN stack-powered site for Wollo University’s Techino Club that simplifies student registration and event management",
    image: "/images/projects/techino.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dawithabte31/KIOT-Techino_club",
    previewUrl: "https://kiot-techino.netlify.app/",
    technos: ["React", "ExptressJs", "TaiwindCss"],
  },
  {
    id: 2,
    title: "Gizebet Project Management System",
    description: "Project 2 description",
    image: "/images/projects/pmp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technos: ["React", "ExptressJs", "TaiwindCss","React", "ExptressJs", "TaiwindCss"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technos: ["React", "ExptressJs", "TaiwindCss"],
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Variants for scaling the section
  const sectionVariants = {
    hidden: { scale: 0.9, opacity: 0 }, // Smaller and transparent
    visible: { scale: 1, opacity: 1 }, // Full size and opaque
    exit: { scale: 0.9, opacity: 0 }, // Shrink when exiting
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 }, // Smaller and transparent
    visible: { scale: 1, opacity: 1 }, // Full size and opaque
    exit: { scale: 0.8, opacity: 0 }, // Shrink when exiting
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on in view status
      exit="exit" // Add exit animation
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-2 gap-1 md:gap-2 w-[100%] md:px-14">
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              className="flex h-[400px]"
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} 
              exit="exit" 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technos={project.technos}
              />
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default ProjectsSection;
