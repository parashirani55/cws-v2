import Image from "next/image";

export default function SecondSection() {
  const boxes = [
    {
      title: "THE MEMBERSHIP",
      img: "/CoursesPage/box1.png",
      para: "Scale your business with monthly access to strategic tools, expert support, and a high-impact creator platform.",
      note: '*Built + optimized for <strong>every</strong> experience level.',
    },
    {
      title: "THE COURSE",
      img: "/CoursesPage/box2.png",
      para: "Master online income with UGC, digital products, and more. Includes 8 full courses and growth tools. Membership not included.",
      note: "*Beginner-friendly, no experience needed.",
    },
    {
      title: "THE BUNDLE",
      img: "/CoursesPage/box3.png",
      para: "The all-in-one system to learn, grow and profit with clarity. 8 full courses + 1-year access to CWS. This is your fast-track blueprint to scalable growth.",
      note: '*Beginner-friendly, <strong>full support included</strong>',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="relative h-[480px] flex flex-col justify-between text-center text-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* ✅ Background Image using next/image for proper rendering */}
            <div className="absolute inset-0">
              <Image
                src={box.img}
                alt={box.title}
                fill
                className="object-cover"
                priority
              />
              {/* ✅ Black overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* ✅ Foreground Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              {/* Heading */}
              <h2 className="text-2xl font-extrabold uppercase mb-6">
                {box.title}
              </h2>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center rounded-full">
                  <Image
                    src="/CoursesPage/Down.png"
                    alt="icon"
                    width={100}
                    height={100}
                    className="object-contain select-none"
                    draggable="false"
                  />
                </div>
              </div>

              {/* Paragraph */}
              <p className="text-base leading-relaxed mb-6">{box.para}</p>

              {/* Note */}
              <p
                className="text-sm italic"
                dangerouslySetInnerHTML={{ __html: box.note }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
