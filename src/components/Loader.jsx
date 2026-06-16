import { motion } from "framer-motion";

export default function Loader() {
  const techs = [
    "Python",
    "React",
    "Flask",
    "AI/ML",
    "MySQL",
  ];

  return (
    <div
      className="
      fixed
      inset-0
      bg-black
      z-[99999]
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* Glow */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
        absolute
        w-[450px]
        h-[450px]
        bg-green-500/10
        blur-[120px]
        rounded-full
        "
      />

      {/* Orbit Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[320px]
        h-[320px]
        rounded-full
        border
        border-green-400/20
        "
      >
        {techs.map((tech, index) => {
          const angle =
            (index / techs.length) * Math.PI * 2;

          const radius = 160;

          const x =
            Math.cos(angle) * radius;

          const y =
            Math.sin(angle) * radius;

          return (
            <div
              key={tech}
              className="
              absolute
              px-3
              py-1
              text-sm
              rounded-full
              bg-green-400/10
              border
              border-green-400/20
              text-green-300
              "
              style={{
                left: `calc(50% + ${x}px - 35px)`,
                top: `calc(50% + ${y}px - 15px)`,
              }}
            >
              {tech}
            </div>
          );
        })}
      </motion.div>

      {/* Center Card */}

      <motion.div
        initial={{
          scale: 0.2,
          opacity: 0,
          filter: "blur(25px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.3,
        }}
        className="
        relative
        w-[320px]
        h-[220px]
        rounded-[32px]
        border
        border-green-400/20
        bg-white/5
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
          text-7xl
          font-black
          text-green-400
          "
        >
          NK
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
          text-gray-400
          mt-3
          tracking-[0.25em]
          uppercase
          "
        >
          Software Developer
        </motion.p>
      </motion.div>
    </div>
  );
}