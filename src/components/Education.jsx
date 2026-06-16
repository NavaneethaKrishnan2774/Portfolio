export default function Education() {
  return (
    <section
      id="education"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-green-400">
            Academic Background
          </p>

          <h2 className="text-6xl font-black">
            Education Journey
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* College */}

          <div
            className="
            group
            h-[320px]
            perspective-[1200px]
            "
          >

            <div
              className="
              relative
              h-full
              w-full
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
              "
            >

              {/* FRONT */}

              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                flex
                flex-col
                items-center
                justify-center
                [backface-visibility:hidden]
                "
              >

                <div className="text-6xl mb-4">
                  🎓
                </div>

                <h3 className="text-3xl font-bold">
                  B.E CSE
                </h3>

              </div>

              {/* BACK */}

              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                bg-gradient-to-br
                from-green-900/40
                to-black
                border
                border-green-400/30
                flex
                flex-col
                justify-center
                items-center
                text-center
                px-6
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]
                "
              >

                <h4 className="text-2xl font-bold text-green-300">
                  Computer Science Engineering
                </h4>

                <p className="mt-3 text-gray-300">
                  2022 - 2026
                </p>

                <p className="text-gray-400 mt-2">
                  Final Year Student
                </p>

              </div>

            </div>

          </div>

          {/* HSC */}

          <div
            className="
            group
            h-[320px]
            perspective-[1200px]
            "
          >

            <div
              className="
              relative
              h-full
              w-full
              duration-700
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
              "
            >

              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                flex
                flex-col
                justify-center
                items-center
                [backface-visibility:hidden]
                "
              >

                <div className="text-6xl mb-4">
                  📖
                </div>

                <h3 className="text-3xl font-bold">
                  Higher Secondary
                </h3>

              </div>

              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                bg-gradient-to-br
                from-emerald-900/40
                to-black
                border
                border-emerald-400/30
                flex
                flex-col
                justify-center
                items-center
                text-center
                px-6
                [transform:rotateY(180deg)]
                [backface-visibility:hidden]
                "
              >

                <h4 className="text-2xl font-bold text-emerald-300">
                  Science Stream
                </h4>

                <p className="text-gray-400 mt-3">
                  Mathematics • Physics • Computer Science
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}