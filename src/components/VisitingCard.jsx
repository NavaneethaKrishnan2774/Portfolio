import { motion } from "framer-motion";

export default function VisitingCard() {
  return (
    <div
      className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        bg-green-500/10
        blur-[180px]
        "
      />

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        w-[850px]
        h-[420px]
        rounded-[40px]
        border
        border-green-400/20
        bg-[#0b0f14]
        overflow-hidden
        shadow-[0_0_80px_rgba(74,222,128,0.15)]
        "
      >
        {/* QR Section */}

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            bg-white
            p-5
            rounded-[25px]
            "
          >
            <div
              className="
              grid
              grid-cols-6
              gap-1
              "
            >
              {[
                1,1,1,0,1,1,
                1,0,1,1,0,1,
                1,1,0,1,1,0,
                0,1,1,0,1,1,
                1,0,1,1,0,1,
                1,1,0,1,1,1,
              ].map((cell, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.03,
                  }}
                  className={`
                    w-7
                    h-7
                    ${cell ? "bg-black" : "bg-white"}
                  `}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Name Reveal */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
          className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          "
        >
          <h1
            className="
            text-7xl
            font-black
            text-white
            "
          >
            NAVANEETHA
          </h1>

          <h1
            className="
            text-7xl
            font-black
            text-green-400
            "
          >
            KRISHNAN
          </h1>

          {/* Roles */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.8,
            }}
            className="
            mt-8
            text-center
            "
          >
            <p className="text-gray-300 text-xl">
              Software Developer
            </p>

            <p className="text-gray-500 mt-2">
              Full Stack Developer
            </p>

            <p className="text-gray-500 mt-2">
              AI / ML Enthusiast
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}