import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-green-400/10
      mt-20
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        "
      >
        <div
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[600px]
          h-[300px]
          bg-green-500/10
          blur-[120px]
          rounded-full
          "
        />
      </div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <h2
            className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-green-300
            to-green-500
            bg-clip-text
            text-transparent
            "
          >
            NK
          </h2>

          <p className="text-gray-400 mt-4">
            Software Developer • Full Stack Developer • AI Enthusiast
          </p>
        </motion.div>

        {/* Social Buttons */}

        <div
          className="
          flex
          justify-center
          flex-wrap
          gap-5
          mt-10
          "
        >
          {/* GitHub */}

          <a
            href="https://github.com/NavaneethaKrishnan2774"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-14
            h-14
            rounded-full
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:border-green-400
            hover:text-green-400
            hover:scale-110
            transition-all
            duration-300
            cursor-pointer
            "
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/navaneetha-krishnan-890a0027b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-14
            h-14
            rounded-full
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:border-green-400
            hover:text-green-400
            hover:scale-110
            transition-all
            duration-300
            cursor-pointer
            "
          >
            <FaLinkedin size={24} />
          </a>

          {/* Email */}

          <a
            href="mailto:naveenmd2004@gmail.com"
            className="
            w-14
            h-14
            rounded-full
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:border-green-400
            hover:text-green-400
            hover:scale-110
            transition-all
            duration-300
            cursor-pointer
            "
          >
            <FaEnvelope size={24} />
          </a>

          {/* Phone */}

          <a
            href="tel:+919751271458"
            className="
            w-14
            h-14
            rounded-full
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:border-green-400
            hover:text-green-400
            hover:scale-110
            transition-all
            duration-300
            cursor-pointer
            "
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>

        {/* Divider */}

        <div
          className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-green-400/30
          to-transparent
          my-10
          "
        />

        {/* Footer Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-gray-500
          text-sm
          "
        >
          <p>
            © 2026 Navaneetha Krishnan. All Rights Reserved.
          </p>

          <p>
            Built with React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}