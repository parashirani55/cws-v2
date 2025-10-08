export default function AboutUsHero() {
  return (
    <section className="w-full bg-white flex items-center justify-center p-4 sm:p-6 lg:p-0 lg:h-screen">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-screen lg:items-center">
        {/* Quote Section */}
        <div className="bg-pink-100 flex items-center justify-center p-8 sm:p-12 lg:p-12 lg:h-auto lg:self-center">
          <div className="max-w-xl lg:max-w-lg flex items-center">
            <div className="relative">
              {/* Opening Quote */}
              <svg
                className="absolute -top-4 -left-2 w-12 h-12 sm:w-16 sm:h-16 text-black"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <text x="0" y="80" fontSize="120" fontFamily="serif">
                  "
                </text>
              </svg>

              {/* Quote Text */}
              <blockquote className="relative z-10 pl-8 sm:pl-10">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-900 font-normal text-center lg:px-8">
                  When you know how to package your{" "}
                  <span className="italic">expertise, build systems, and run your business with strategy,</span>{" "}
                  <span className="font-bold">you stop trading time for money</span>{" "}
                  <span className="italic">
                    and start building something that gives you freedom, success and the kind of wealth that always felt out of reach...
                  </span>
                </p>
              </blockquote>

              {/* Closing Quote */}
              <svg
                className="absolute -bottom-4 right-0 w-12 h-12 sm:w-16 sm:h-16 text-black transform rotate-180"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <text x="0" y="80" fontSize="120" fontFamily="serif">
                  "
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* ✅ Fixed Image Section with Custom Thick Border */}
        <div className="bg-red-900 flex items-center justify-center p-0 min-h-[300px] lg:h-screen">
          <div className="w-full h-full flex items-center justify-center lg:justify-end overflow-hidden">
            <img
              src="/AboutUs/About-Hero.png"
              alt="Woman walking on beach near water with sun hat"
              className="w-full h-full object-cover lg:object-right shadow-2xl border-[50px] border-[#7b112a]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
