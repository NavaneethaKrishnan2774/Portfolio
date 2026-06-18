import { useState, useEffect } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  project,
  closeModal,
}) {
  const [activeImage, setActiveImage] =
    useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="
          fixed
          inset-0
          bg-black/80
          backdrop-blur-md
          z-50
          flex
          items-center
          justify-center
          p-4
          "
        >
          <motion.div
            onClick={(e) =>
              e.stopPropagation()
            }
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            className="
            w-full
            max-w-5xl
            h-[95vh]
            overflow-y-auto
            bg-[#0d1117]
            rounded-[30px]
            border
            border-green-400/20
            p-6
            sm:p-8
            relative
            "
          >
            {/* Close Button */}

            <button
              onClick={closeModal}
              className="
              absolute
              right-6
              top-6
              z-50
              text-gray-400
              hover:text-green-400
              transition
              "
            >
              <FaTimes size={24} />
            </button>

            {/* Featured Badge */}

            {project.featured && (
              <div
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-green-400/10
                border
                border-green-400/20
                text-green-300
                mb-6
                "
              >
                ⭐ Featured Project
              </div>
            )}

            {/* Title */}

            <h2
              className="
              text-3xl
              sm:text-4xl
              font-black
              leading-tight
              "
            >
              {project.title}
            </h2>

            <p className="text-green-400 mt-3 text-sm sm:text-base">
              {project.category}
            </p>

            {/* Main Image */}

            <div className="mt-8 mb-8">
              <div
                className="
                w-full
                bg-black/30
                rounded-3xl
                border
                border-green-400/20
                overflow-hidden
                flex
                justify-center
                items-center
                "
              >
                <img
                  src={
                    project.images?.[
                      activeImage
                    ] || project.image
                  }
                  alt={project.title}
                  className="
                  w-full
                  h-auto
                  max-h-[70vh]
                  object-contain
                  "
                />
              </div>

              {/* Thumbnails */}

              {project.images?.length > 1 && (
                <div
                  className="
                  flex
                  gap-3
                  mt-4
                  overflow-x-auto
                  pb-2
                  "
                >
                  {project.images.map(
                    (img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        onClick={() =>
                          setActiveImage(index)
                        }
                        className={`
                          w-24
                          h-16
                          object-cover
                          rounded-xl
                          cursor-pointer
                          border
                          transition-all
                          duration-300
                          ${
                            activeImage === index
                              ? "border-green-400 scale-105"
                              : "border-green-400/20"
                          }
                        `}
                      />
                    )
                  )}
                </div>
              )}
            </div>

            {/* Description */}

            <p
              className="
              text-gray-300
              leading-8
              text-sm
              sm:text-base
              "
            >
              {project.fullDescription}
            </p>

            {/* Tech Stack */}

            <h3 className="text-2xl font-bold mt-10">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
              {project.technologies.map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-400/10
                    border
                    border-green-400/20
                    text-green-300
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Features */}

            <h3 className="text-2xl font-bold mt-10">
              Features
            </h3>

            <ul className="mt-4 space-y-3">
              {project.features.map(
                (item) => (
                  <li
                    key={item}
                    className="text-gray-300"
                  >
                    ✅ {item}
                  </li>
                )
              )}
            </ul>

            {/* Learnings */}

            <h3 className="text-2xl font-bold mt-10">
              Learnings
            </h3>

            <ul className="mt-4 space-y-3">
              {project.learnings.map(
                (item) => (
                  <li
                    key={item}
                    className="text-gray-300"
                  >
                    🚀 {item}
                  </li>
                )
              )}
            </ul>

            {/* GitHub */}

            {project.github?.length >
              0 && (
              <div className="flex flex-wrap gap-4 mt-10">
                {project.github.map(
                  (link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-green-400
                      text-black
                      font-bold
                      hover:scale-105
                      transition
                      "
                    >
                      <FaGithub />
                      GitHub Repository
                    </a>
                  )
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}