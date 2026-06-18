import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full" />

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        max-w-6xl
        mx-auto
        rounded-[50px]
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-12
        md:p-20
        text-center
        "
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-sm">
          About Me
        </p>

        <h2 className="text-5xl font-black mt-4 mb-8">
          Building Real World Software Solutions
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          I am a Computer Science and Engineering graduate focused on building reliable and efficient software solutions. My expertise lies in Python, Django, React.js, and database technologies, with practical experience gained through developing web applications, management systems, and machine learning-based projects.

I enjoy transforming ideas into functional products by combining clean code, structured problem-solving, and modern development practices. From backend architecture and API development to responsive user interfaces, I am committed to creating solutions that deliver both performance and usability.

Currently, I am seeking opportunities to begin my professional journey as a Software Developer, where I can contribute, learn from experienced teams, and grow into a highly skilled engineering professional.
        </p>
      </motion.div>
    </section>
  );
}