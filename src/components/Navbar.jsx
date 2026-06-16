import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50
      border-b border-white/10
      backdrop-blur-xl bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1
          className="
          text-3xl font-black
          bg-gradient-to-r
          from-green-300
          via-green-400
          to-green-500
          bg-clip-text
          text-transparent"
        >
          NK
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-green-400 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>

        </div>

      </div>
    </motion.nav>
  );
}