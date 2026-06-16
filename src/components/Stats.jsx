import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects Built",
    icon: "🚀",
    description: "Academic, Research & Personal Projects",
  },

  {
    number: "3+",
    title: "Certifications",
    icon: "📜",
    description: "Python, DBMS & AR/VR",
  },

  {
    number: "1",
    title: "Research Publication",
    icon: "🏆",
    description: "Presented at ICDTSES 2026",
  },

  {
    number: "4+",
    title: "Core Domains",
    icon: "💡",
    description: "Web, AI, ML & Databases",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-green-500/10
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
          className="text-center mb-16"
        >

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-green-400
            text-sm
            "
          >
            Highlights
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-4
            "
          >
            By The Numbers
          </h2>

          <p
            className="
            text-gray-400
            mt-6
            max-w-2xl
            mx-auto
            "
          >
            A quick overview of my academic,
            development, and research journey.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >

          {stats.map((item, index) => (

            <motion.div
              key={index}
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
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="
              relative
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[30px]
              p-8
              text-center
              overflow-hidden
              hover:border-green-400/40
              hover:shadow-[0_0_35px_rgba(74,222,128,0.2)]
              transition-all
              duration-300
              "
            >

              {/* Floating Glow */}

              <div
                className="
                absolute
                -top-12
                -right-12
                w-32
                h-32
                bg-green-500/10
                blur-3xl
                rounded-full
                "
              />

              <motion.div
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3
                }}
                className="text-5xl mb-5"
              >
                {item.icon}
              </motion.div>

              <motion.h3
                initial={{
                  scale: 0
                }}
                whileInView={{
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  type: "spring",
                  stiffness: 120
                }}
                className="
                text-5xl
                font-black
                text-green-400
                "
              >
                {item.number}
              </motion.h3>

              <h4
                className="
                mt-4
                text-xl
                font-semibold
                "
              >
                {item.title}
              </h4>

              <p
                className="
                mt-3
                text-gray-400
                text-sm
                leading-6
                "
              >
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}