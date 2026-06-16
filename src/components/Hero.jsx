import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import OrbitCard from "./OrbitCard";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      <Particles />

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      <div
        className="
        absolute top-0 left-0
        w-[600px] h-[600px]
        bg-green-500/20
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-[600px] h-[600px]
        bg-emerald-500/20
        blur-3xl
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.4em] text-green-400 text-sm mb-4">
            Software Developer
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-tight">
            <span className="text-white">Navaneetha</span>

            <br />

            <span
              className="
              bg-gradient-to-r
              from-green-300
              to-green-500
              bg-clip-text
              text-transparent
              "
            >
              Krishnan
            </span>
          </h1>

          <div className="mt-8 text-2xl text-gray-300">
            <TypeAnimation
              sequence={[
                "Python Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 max-w-xl text-lg">
            Building intelligent software solutions, accessibility
            platforms, transportation systems, and AI-powered applications.
          </p>

          <div className="flex gap-5 mt-10">
            <button
              className="
              px-8 py-4
              rounded-2xl
              bg-green-400
              text-black
              font-bold
              hover:scale-105
              transition
              "
            >
              Explore Work
            </button>

            <button
              className="
              px-8 py-4
              rounded-2xl
              border
              border-green-400
              hover:bg-green-400/10
              transition
              "
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <OrbitCard />
        </motion.div>
      </div>
    </section>
  );
}