import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "JavaScript", "SQL"],
  },

  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "Tailwind", "Bootstrap", "React"],
  },

  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Flask", "REST API", "MySQL", "SQLite"],
  },

  {
    title: "AI & ML",
    icon: "🤖",
    skills: [
      "Machine Learning",
      "OpenCV",
      "Speech Recognition",
      "NLP",
    ],
  },

  {
    title: "Core CS",
    icon: "📚",
    skills: [
      "DSA",
      "DBMS",
      "OOPS",
      "OS",
      "Computer Networks",
    ],
  },

  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <div className="text-center mb-16 lg:mb-20">
          <p className="uppercase tracking-[0.4em] text-green-400">
            Expertise
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            mt-4
            "
          >
            Skills & Technologies
          </motion.h2>
        </div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
              relative
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[30px]
              p-8
              overflow-hidden
              group
              transition-all
              duration-500
              hover:border-green-400/50
              hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]
              "
            >
              {/* Hover Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                from-green-400/10
                via-transparent
                to-green-400/5
                "
              />

              {/* Category Title */}

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <motion.span
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="text-3xl"
                >
                  {category.icon}
                </motion.span>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                    }}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-green-400/10
                    border
                    border-green-400/20
                    text-green-300
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-green-400
                    hover:text-black
                    hover:border-green-400
                    hover:shadow-[0_0_20px_rgba(74,222,128,0.8)]
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}