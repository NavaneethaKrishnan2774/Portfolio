import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import OrbitCard from "./OrbitCard";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      relative
      overflow-x-hidden
      pt-28
      lg:pt-0
      flex
      items-center
      px-4
      sm:px-6
      "
    >
      <Particles />

      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      {/* Left Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[250px]
        h-[250px]
        sm:w-[400px]
        sm:h-[400px]
        lg:w-[600px]
        lg:h-[600px]
        bg-green-500/20
        blur-3xl
        rounded-full
        "
      />

      {/* Right Glow */}
      <div
        className="
        absolute
        bottom-0
        right-0
        w-[250px]
        h-[250px]
        sm:w-[400px]
        sm:h-[400px]
        lg:w-[600px]
        lg:h-[600px]
        bg-emerald-500/20
        blur-3xl
        rounded-full
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-2
        gap-12
        lg:gap-16
        items-center
        "
      >
        {/* MOBILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          flex
          justify-center
          lg:hidden
          "
        >
          <OrbitCard />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          text-center
          lg:text-left
          "
        >
          <p
            className="
            uppercase
            tracking-[0.35em]
            text-green-400
            text-xs
            sm:text-sm
            mb-4
            "
          >
            Software Developer
          </p>

          <h1 className="font-black leading-none">
            <span
              className="
              block
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              "
            >
              Navaneetha
            </span>

            <span
              className="
              block
              mt-2
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              bg-gradient-to-r
              from-green-300
              via-green-400
              to-green-500
              bg-clip-text
              text-transparent
              "
            >
              Krishnan
            </span>
          </h1>

          <div
            className="
            mt-6
            text-xl
            sm:text-2xl
            text-gray-300
            min-h-[50px]
            "
          >
            <TypeAnimation
              sequence={[
                "Python Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p
            className="
            mt-6
            text-gray-400
            text-base
            sm:text-lg
            max-w-xl
            mx-auto
            lg:mx-0
            leading-8
            "
          >
            Building intelligent software solutions,
            academic management platforms,
            transportation systems,
            and AI-powered applications.
          </p>

          {/* BUTTONS */}
          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            lg:justify-start
            relative
            z-50
            "
          >
            <a
              href="#projects"
              className="
              px-8
              py-4
              rounded-2xl
              bg-green-400
              text-black
              font-bold
              hover:scale-105
              transition-all
              duration-300
              text-center
              cursor-pointer
              "
            >
              Explore Work
            </a>

            <a
              href="#contact"
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-green-400
              hover:bg-green-400/10
              transition-all
              duration-300
              text-center
              cursor-pointer
              "
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* DESKTOP CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
          hidden
          lg:flex
          justify-center
          "
        >
          <OrbitCard />
        </motion.div>
      </div>
    </section>
  );
}