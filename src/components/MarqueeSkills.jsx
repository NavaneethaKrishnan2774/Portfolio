const skills = [
  "Python",
  "Flask",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "SQLite",
  "OpenCV",
  "Machine Learning",
  "Git",
  "GitHub",
  "REST API",
  "DSA",
  "OOPS",
];

export default function MarqueeSkills() {
  return (
    <section className="overflow-hidden border-y border-white/10 py-10">

      <div className="marquee">

        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="text-green-300 font-bold text-xl mx-8"
          >
            ✦ {skill}
          </span>
        ))}

      </div>

    </section>
  );
}