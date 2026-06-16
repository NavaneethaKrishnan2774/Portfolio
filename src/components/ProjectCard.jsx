import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-green-500/10
        blur-[150px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-emerald-500/10
        blur-[150px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-20"
        >

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-green-400
            text-sm
            "
          >
            Portfolio
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-4
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            text-gray-400
            max-w-2xl
            mx-auto
            mt-6
            "
          >
            A collection of projects spanning
            web development, machine learning,
            transportation systems, and research.
          </p>

        </motion.div>

        {/* Projects Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >

          {projects.map((project) => (

            <div
              key={project.id}
              className="relative"
            >

              {/* Featured Badge */}

              {project.featured && (

                <div
                  className="
                  absolute
                  top-4
                  right-4
                  z-20
                  px-3
                  py-1
                  rounded-full
                  bg-green-400
                  text-black
                  text-xs
                  font-bold
                  "
                >
                  ⭐ Featured
                </div>

              )}

              <ProjectCard
                project={project}
                openModal={
                  setSelectedProject
                }
              />

            </div>

          ))}

        </div>

      </div>

      {/* Modal */}

      <ProjectModal
        project={selectedProject}
        closeModal={() =>
          setSelectedProject(null)
        }
      />

    </section>
  );
}