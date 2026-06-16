import { useState } from "react";
import certifications from "../data/certifications";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certifications"
      className="py-32 px-6 relative"
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-green-500/10
        blur-3xl
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-green-400">
            Achievements
          </p>

          <h2 className="text-6xl font-black mt-4">
            Certifications
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Professional certifications and technical training
            completed across programming, databases,
            analytics, AI, and emerging technologies.
          </p>
        </div>

        {/* Certificates Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="
              group
              cursor-pointer
              overflow-hidden
              rounded-[35px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-green-400/40
              hover:-translate-y-3
              hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]
              transition-all
              duration-500
              "
            >
              {/* Certificate Image */}

              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                  w-full
                  h-60
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                  "
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <div
                  className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-green-400/10
                  border
                  border-green-400/20
                  text-green-300
                  text-xs
                  mb-4
                  "
                >
                  {cert.category}
                </div>

                <h3
                  className="
                  text-xl
                  font-bold
                  min-h-[60px]
                  "
                >
                  {cert.title}
                </h3>

                <p className="text-green-400 mt-3">
                  {cert.provider}
                </p>

                <button
                  className="
                  mt-6
                  px-5
                  py-2
                  rounded-full
                  bg-green-400/10
                  border
                  border-green-400/30
                  text-green-300
                  hover:bg-green-400/20
                  transition
                  "
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      <CertificateModal
        certificate={selectedCert}
        closeModal={() => setSelectedCert(null)}
      />
    </section>
  );
}