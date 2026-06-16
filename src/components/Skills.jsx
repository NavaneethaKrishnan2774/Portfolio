import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      "Python",
      "JavaScript",
      "SQL"
    ]
  },

  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "React"
    ]
  },

  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Flask",
      "REST API",
      "MySQL",
      "SQLite"
    ]
  },

  {
    title: "AI & ML",
    icon: "🤖",
    skills: [
      "Machine Learning",
      "OpenCV",
      "Speech Recognition",
      "NLP"
    ]
  },

  {
    title: "Core CS",
    icon: "📚",
    skills: [
      "DSA",
      "DBMS",
      "OOPS",
      "OS",
      "Computer Networks"
    ]
  },

  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code"
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-green-400">
            Expertise
          </p>

          <h2 className="text-6xl font-black mt-4">
            Skills & Technologies
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[30px]
              p-8
              hover:border-green-400/40
              transition
              "
            >

              <h3 className="text-2xl font-bold mb-6">

                {category.icon} {category.title}

              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
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
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}