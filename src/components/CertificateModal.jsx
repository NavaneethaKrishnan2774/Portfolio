import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

export default function CertificateModal({
  certificate,
  closeModal,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [closeModal]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={closeModal}
        className="
        fixed
        inset-0
        z-[9999]
        bg-black/90
        backdrop-blur-lg
        flex
        items-center
        justify-center
        p-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={(e) =>
            e.stopPropagation()
          }
          className="
          relative
          flex
          flex-col
          items-center
          max-w-5xl
          w-full
          "
        >
          {/* Close Button */}

          <button
            onClick={closeModal}
            className="
            absolute
            -top-4
            -right-4
            z-50
            w-12
            h-12
            rounded-full
            bg-black
            border
            border-green-400/40
            flex
            items-center
            justify-center
            text-white
            hover:bg-green-400
            hover:text-black
            hover:scale-110
            transition-all
            duration-300
            shadow-[0_0_20px_rgba(74,222,128,0.35)]
            "
          >
            <FaTimes />
          </button>

          {/* Certificate Image */}

          <img
            src={certificate.image}
            alt={certificate.title}
            className="
            max-h-[75vh]
            max-w-full
            w-auto
            object-contain
            rounded-[24px]
            border
            border-green-400/20
            shadow-[0_0_40px_rgba(74,222,128,0.2)]
            "
          />

          {/* Details */}

          <div
            className="
            mt-5
            text-center
            "
          >
            <h3
              className="
              text-2xl
              font-bold
              "
            >
              {certificate.title}
            </h3>

            <p
              className="
              text-green-400
              mt-2
              "
            >
              {certificate.provider}
            </p>

            <p
              className="
              text-gray-400
              mt-1
              "
            >
              {certificate.category}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}