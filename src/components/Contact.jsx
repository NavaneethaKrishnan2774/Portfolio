import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaFileDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-green-400">
            Contact
          </p>

          <h2 className="text-6xl font-black mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Open to Software Development, Full Stack Development,
            Python Development, and AI/ML opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-[40px]
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            p-10
            "
          >

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch 🚀
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-400 text-2xl" />
                <span>
                  naveenmd2004@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-400 text-2xl" />
                <span>
                  +91 9751271458
                </span>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              {/* GitHub */}

              <a
                href="https://github.com/NavaneethaKrishnan2774"
                target="_blank"
                rel="noreferrer"
                className="
                w-16
                h-16
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-green-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaGithub size={28} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/navaneetha-krishnan-890a0027b/"
                target="_blank"
                rel="noreferrer"
                className="
                w-16
                h-16
                rounded-full
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-green-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaLinkedin size={28} />
              </a>

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="
                w-16
                h-16
                rounded-full
                bg-green-400
                text-black
                flex
                items-center
                justify-center
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaFileDownload size={24} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            rounded-[40px]
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            p-10
            "
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                w-full
                p-4
                rounded-2xl
                bg-black/20
                border
                border-white/10
                outline-none
                "
              />

              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-2xl
                bg-green-400
                text-black
                font-bold
                hover:scale-[1.02]
                transition
                "
              >
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}