import { motion } from "framer-motion";
import { useState } from "react";

import profile from "../assets/profile.jpg";

export default function OrbitCard() {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientY - rect.top - rect.height / 2) / 20;

    const y =
      -(e.clientX - rect.left - rect.width / 2) / 20;

    setRotate({
      x,
      y,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() =>
        setRotate({
          x: 0,
          y: 0,
        })
      }
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
      }}
      className="
      relative
      w-[300px]
      h-[400px]

      sm:w-[350px]
      sm:h-[460px]

      lg:w-[420px]
      lg:h-[560px]

      rounded-[40px]
      bg-white/5
      backdrop-blur-2xl
      border
      border-white/10
      shadow-[0_0_80px_rgba(74,222,128,0.15)]
      overflow-hidden
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-24
        -left-24
        w-60
        h-60
        bg-green-500/20
        blur-3xl
        rounded-full
        "
      />

      {/* Orbit Rings */}

      <div
        className="
        absolute
        inset-0
        flex
        justify-center
        items-center
        "
      >
        <div
          className="
          absolute

          w-[220px]
          h-[220px]

          sm:w-[280px]
          sm:h-[280px]

          lg:w-[340px]
          lg:h-[340px]

          rounded-full
          border
          border-green-400/30
          animate-spin
          "
          style={{
            animationDuration: "18s",
          }}
        />

        <div
          className="
          absolute

          w-[280px]
          h-[280px]

          sm:w-[340px]
          sm:h-[340px]

          lg:w-[420px]
          lg:h-[420px]

          rounded-full
          border
          border-green-400/15
          animate-spin
          "
          style={{
            animationDuration: "25s",
          }}
        />

        <div
          className="
          absolute

          w-[340px]
          h-[340px]

          sm:w-[420px]
          sm:h-[420px]

          lg:w-[500px]
          lg:h-[500px]

          rounded-full
          border
          border-green-400/5
          animate-spin
          "
          style={{
            animationDuration: "35s",
          }}
        />
      </div>

      {/* Profile Image */}

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
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
          relative

          w-[180px]
          h-[180px]

          sm:w-[220px]
          sm:h-[220px]

          lg:w-[280px]
          lg:h-[280px]

          rounded-full
          overflow-hidden

          border-[5px]
          border-green-400

          ring-[12px]
          lg:ring-[18px]
          ring-green-400/15

          shadow-[0_0_80px_rgba(74,222,128,0.8)]
          "
        >
          <img
            src={profile}
            alt="Navaneetha Krishnan"
            className="
            w-full
            h-full
            object-cover
            "
          />
        </motion.div>
      </div>

      {/* Bottom Content */}

      <div
        className="
        absolute

        bottom-6
        lg:bottom-10

        left-0
        right-0

        text-center
        px-4
        "
      >
        <h3
          className="
          text-xl
          sm:text-2xl
          lg:text-3xl

          font-bold
          text-white
          "
        >
          Software Developer
        </h3>

        <p
          className="
          text-gray-400

          mt-2

          text-sm
          sm:text-base
          lg:text-lg
          "
        >
          Python • Django • AI • ML
        </p>
      </div>
    </motion.div>
  );
}