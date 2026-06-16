import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import certificate from "../assets/certificates/publication-certificate.jpg";
export default function Publications() {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanned(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="publications"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-green-500/10
        blur-[150px]
        rounded-full
        "
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-green-400">
            Research Publication
          </p>

          <h2 className="text-6xl font-black mt-4">
            Featured Paper
          </h2>
        </div>

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-green-400/30
          bg-white/5
          backdrop-blur-2xl
          min-h-[750px]
          p-10
          "
        >
          {/* SCANNING SCREEN */}

          {!scanned && (
            <div className="relative h-[600px] flex items-center justify-center">
              <div
                className="
                absolute
                left-0
                w-full
                h-1
                bg-green-400
                shadow-[0_0_30px_#4ade80]
                animate-[scanner_3s_linear_infinite]
                "
              />

              <div className="text-center">
                <h2
                  className="
                  text-5xl
                  font-black
                  text-green-400
                  animate-pulse
                  "
                >
                  RESEARCH DATABASE
                </h2>

                <p className="mt-8 text-xl text-green-300">
                  Scanning Publication...
                </p>
              </div>
            </div>
          )}

          {/* REVEALED CONTENT */}

          {scanned && (
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
                duration: 1,
              }}
            >
              {/* Badge */}

              <div className="flex justify-center">
                <div
                  className="
                  px-6
                  py-3
                  rounded-full
                  bg-green-400/10
                  border
                  border-green-400/30
                  text-green-300
                  font-semibold
                  animate-bounce
                  "
                >
                  🏆 International Conference Publication
                </div>
              </div>

              {/* Certificate */}

              <img
                src={certificate}
                alt="Publication Certificate"
                className="
                mt-10
                w-full
                rounded-[30px]
                border
                border-green-400/20
                shadow-[0_0_40px_rgba(74,222,128,0.2)]
                "
              />

              {/* Research Overview */}

              <div className="mt-12">
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-green-300
                  "
                >
                  Research Overview
                </h3>

                <p
                  className="
                  mt-6
                  text-gray-300
                  leading-8
                  text-lg
                  "
                >
                  This research focuses on abnormal crowd behaviour
                  detection using swarm intelligence based segmentation
                  techniques combined with ensemble learning models.

                  The proposed approach improves surveillance analysis by
                  accurately identifying unusual crowd movements and
                  potentially dangerous situations from video streams.
                </p>
              </div>

              {/* Typing Title */}

              <div className="mt-14 text-center">
                <TypeAnimation
                  sequence={[
                    "Swarm Intelligence–Based Segmentation and Ensemble Learning for Abnormal Crowd Behaviour Detection",
                    1000,
                  ]}
                  speed={70}
                  cursor={true}
                  className="
                  text-2xl
                  md:text-4xl
                  font-bold
                  "
                />
              </div>

              {/* Info Grid */}

              <div
                className="
                grid
                md:grid-cols-3
                gap-8
                mt-12
                text-center
                "
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="
                  rounded-2xl
                  p-6
                  bg-green-400/5
                  border
                  border-green-400/20
                  "
                >
                  <p className="text-green-400 font-semibold">
                    Conference
                  </p>

                  <p className="mt-2">
                    ICDTSES 2026
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="
                  rounded-2xl
                  p-6
                  bg-green-400/5
                  border
                  border-green-400/20
                  "
                >
                  <p className="text-green-400 font-semibold">
                    Organization
                  </p>

                  <p className="mt-2">
                    NIT Puducherry
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="
                  rounded-2xl
                  p-6
                  bg-green-400/5
                  border
                  border-green-400/20
                  "
                >
                  <p className="text-green-400 font-semibold">
                    Paper ID
                  </p>

                  <p className="mt-2">
                    ICDTSES-144
                  </p>
                </motion.div>
              </div>

              {/* Key Contributions */}

              <div className="mt-12">
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-green-300
                  mb-8
                  "
                >
                  Key Contributions
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Swarm Intelligence Segmentation",
                    "Ensemble Learning Models",
                    "Crowd Behaviour Analysis",
                    "Smart Surveillance Applications",
                    "Abnormal Event Detection",
                    "AI Driven Monitoring",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                      p-5
                      rounded-2xl
                      bg-white/5
                      backdrop-blur-lg
                      border
                      border-green-400/20
                      hover:border-green-400/50
                      hover:scale-105
                      transition-all
                      duration-300
                      "
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Authors */}

              <div className="mt-12">
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-green-300
                  "
                >
                  Authors
                </h3>

                <div className="mt-6 flex flex-wrap gap-4">
                  {[
                    "M. Loga Anand",
                    "S. Makesh Sanjay",
                    "M.D. Navaneetha Krishnan",
                  ].map((author, index) => (
                    <span
                      key={index}
                      className="
                      px-6
                      py-3
                      rounded-full
                      bg-green-400/10
                      border
                      border-green-400/30
                      text-green-200
                      hover:bg-green-400/20
                      transition-all
                      duration-300
                      "
                    >
                      {author}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}