import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020",
    icon: "🏫",
    title: "SSC",
    description:
      "Completed secondary education at JSR Higher Secondary School with 84.4%. Built a strong foundation in Mathematics, Science, and analytical thinking.",
    skills: ["Mathematics", "Science", "Problem Solving"]
  },

  {
    year: "2022",
    icon: "🧮",
    title: "HSC - Computer Maths",
    description:
      "Completed higher secondary education with 84.4%. Developed analytical and logical thinking through Computer Mathematics and gained early exposure to programming concepts.",
    skills: ["Computer Maths", "Logic", "Programming Basics"]
  },

  {
    year: "2022 - 2026",
    icon: "🎓",
    title: "B.E Computer Science & Engineering",
    description:
      "P.A. College of Engineering and Technology • Anna University • CGPA 7.69. Developed strong knowledge in software development, database systems, computer networks, operating systems, artificial intelligence, and machine learning.",
    skills: [
      "DSA",
      "DBMS",
      "OOPS",
      "OS",
      "Computer Networks",
      "Software Engineering",
      "AI & ML"
    ]
  },

  {
    year: "2024",
    icon: "🚌",
    title: "Bus Scheduling System",
    description:
      "Designed a transportation management solution for route planning and bus scheduling. Strengthened skills in system design, database management, and real-world problem solving.",
    skills: [
      "System Design",
      "MySQL",
      "Route Optimization"
    ]
  },

  {
    year: "2025",
    icon: "🤖",
    title: "Twitter Bot Detection",
    description:
      "Developed a machine learning based mini-project for identifying automated social media accounts. Learned data preprocessing, model training, and classification techniques.",
    skills: [
      "Machine Learning",
      "Classification",
      "Data Processing"
    ]
  },

  {
    year: "2025",
    icon: "📝",
    title: "Django Blog Application",
    description:
      "Built a full-stack blogging platform while learning Django. Gained practical experience in backend development, authentication, CRUD operations, and database integration.",
    skills: [
      "Django",
      "Authentication",
      "CRUD",
      "Database"
    ]
  },

  {
    year: "2026",
    icon: "🏆",
    title: "Research Publication",
    description:
      "Published and presented a research paper at ICDTSES 2026, NIT Puducherry on abnormal crowd behaviour detection using swarm intelligence and ensemble learning.",
    skills: [
      "Research",
      "Computer Vision",
      "Ensemble Learning",
      "Swarm Intelligence"
    ]
  },

  {
    year: "2026",
    icon: "👥",
    title: "Final Year Project",
    description:
      "Developed an AI-powered abnormal crowd behaviour detection system capable of identifying unusual activities from surveillance video streams.",
    skills: [
      "AI",
      "Machine Learning",
      "Video Analytics"
    ]
  },

  {
    year: "Present",
    icon: "🎯",
    title: "Student Management System",
    description:
      "Building a full-stack academic and placement management platform with student, faculty, placement, and administration modules.",
    skills: [
      "React",
      "Flask",
      "Dashboard Design",
      "Full Stack"
    ]
  },

  {
    year: "Upcoming",
    icon: "🌱",
    title: "Agri Connect",
    description:
      "Planned smart agriculture platform connecting farmers and consumers directly through technology-driven solutions.",
    skills: [
      "Agritech",
      "Platform Development"
    ]
  }
];

export default function EducationTimeline() {
  return (
    <section
      id="journey"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.4em] text-green-400 text-sm">
            Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Academic & Professional Growth
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My journey from school education to engineering,
            research publication, and real-world software development.
          </p>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-5
            top-0
            bottom-0
            w-[3px]
            bg-gradient-to-b
            from-green-400
            via-green-500
            to-transparent
            "
          />

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="relative pl-20 mb-12"
            >

              {/* Timeline Dot */}

              <div
                className="
                absolute
                left-0
                top-2
                w-12
                h-12
                rounded-full
                bg-green-500
                flex
                items-center
                justify-center
                text-xl
                shadow-[0_0_25px_rgba(74,222,128,0.8)]
                "
              >
                {item.icon}
              </div>

              {/* Card */}

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[30px]
                p-8
                hover:border-green-400/40
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]
                transition-all
                duration-300
                "
              >

                <span className="text-green-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {item.skills.map((skill, idx) => (

                    <span
                      key={idx}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-green-400/10
                      border
                      border-green-400/20
                      text-green-300
                      text-sm
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}