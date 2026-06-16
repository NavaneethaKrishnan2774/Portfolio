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
      w-[420px]
      h-[560px]
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
        -top-32
        -left-32
        w-72
        h-72
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
          w-[340px]
          h-[340px]
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
          w-[420px]
          h-[420px]
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
          w-[500px]
          h-[500px]
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

      {/* Profile Picture */}

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
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
          relative
          w-[280px]
          h-[280px]
          rounded-full
          overflow-hidden
          border-[6px]
          border-green-400
          ring-[18px]
          ring-green-400/15
          shadow-[0_0_100px_rgba(74,222,128,0.8)]
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

      {/* Bottom Text */}

      <div
        className="
        absolute
        bottom-10
        left-0
        right-0
        text-center
        "
      >
        <h3
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          Software Developer
        </h3>

        <p
          className="
          text-gray-400
          mt-3
          text-lg
          "
        >
          Python • Django • AI • ML
        </p>
      </div>
    </motion.div>
  );
}