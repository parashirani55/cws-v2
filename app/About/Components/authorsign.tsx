"use client";

import Image from "next/image";

export default function Authorsign() {
  return (
    <section className="w-full bg-white">
      {/* Full-width Image */}
      <div className="w-full h-[47vh] relative">
        <Image
          src="/AboutUs/Section-1/authorimg.png"
          alt="Author Image"
          fill
          className="object-contain rounded-lg"
          draggable="false"
        />
      </div>
    </section>
  );
}
