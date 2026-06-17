import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cardImage from "../assets/business-card.png";

export default function IntroReveal() {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setStage(2), 2200)); // QR Zoom
    timers.push(setTimeout(() => setStage(3), 3400)); // NK
    timers.push(setTimeout(() => setStage(4), 4500)); // Expand Name
    timers.push(setTimeout(() => setStage(5), 7000)); // Portfolio

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-black overflow-hidden flex items-center justify-center">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-green-500/10
        blur-[250px]
        "
      />

      {/* CARD */}

      {(stage === 1 || stage === 2) && (
        <motion.div
          initial={{
            x: -1200,
            rotate: -10,
            opacity: 0,
          }}
          animate={{
            x: stage === 1 ? 0 : 250,
            y: stage === 1 ? 0 : -40,
            scale: stage === 1 ? 1 : 4,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute"
        >
          <img
            src={cardImage}
            alt="Business Card"
            className="
            w-[95vw]
            max-w-[1100px]
            rounded-3xl
            shadow-[0_0_80px_rgba(255,215,0,0.25)]
            "
          />
        </motion.div>
      )}

      {/* NK */}

      {stage >= 3 && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: stage >= 5 ? -60 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="absolute"
        >
          {/* EXPANDING NAME */}

          <div className="flex items-center gap-4 md:gap-8">

            <motion.div
              initial={{
                width: "1ch",
              }}
              animate={{
                width:
                  stage >= 4
                    ? "10ch"
                    : "1ch",
              }}
              transition={{
                duration: 2,
              }}
              className="
              overflow-hidden
              whitespace-nowrap
              text-4xl
              md:text-7xl
              font-black
              text-white
              "
            >
              Navaneetha
            </motion.div>

            <motion.div
              initial={{
                width: "1ch",
              }}
              animate={{
                width:
                  stage >= 4
                    ? "9ch"
                    : "1ch",
              }}
              transition={{
                duration: 2,
              }}
              className="
              overflow-hidden
              whitespace-nowrap
              text-4xl
              md:text-7xl
              font-black
              bg-gradient-to-r
              from-green-300
              to-green-500
              bg-clip-text
              text-transparent
              "
            >
              Krishnan
            </motion.div>

          </div>

          {/* PORTFOLIO */}

          {stage >= 5 && (
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
              mt-6
              text-center
              text-xl
              md:text-3xl
              tracking-[0.5em]
              text-green-400
              "
            >
              PORTFOLIO
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}