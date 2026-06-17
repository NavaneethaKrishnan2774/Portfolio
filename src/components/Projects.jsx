import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16 lg:mb-20">
          <p className="uppercase tracking-[0.4em] text-green-400">
            Portfolio
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            mt-4
            "
          >
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          items-stretch
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              bg-white/5
              border
              border-white/10
              rounded-[30px]
              overflow-hidden
              backdrop-blur-xl
              flex
              flex-col
              h-full
              hover:border-green-400/40
              hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]
              "
            >
              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-52
                sm:h-56
                object-cover
                "
              />

              {/* Content */}

              <div
                className="
                p-6
                flex
                flex-col
                flex-1
                "
              >
                {project.featured && (
                  <span className="text-green-400">
                    ⭐ Featured
                  </span>
                )}

                <p className="mt-2 text-green-400 text-sm">
                  {project.category}
                </p>

                <h3
                  className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-2
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-gray-400
                  mt-4
                  text-sm
                  sm:text-base
                  "
                >
                  {project.description}
                </p>

                {/* Button */}

                <button
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className="
                  mt-auto
                  w-full
                  px-5
                  py-3
                  rounded-xl
                  bg-green-400
                  text-black
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-[0_0_20px_rgba(74,222,128,0.3)]
                  "
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        closeModal={() =>
          setSelectedProject(null)
        }
      />
    </section>
  );
}