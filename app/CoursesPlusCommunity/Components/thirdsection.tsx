export default function MembershipSection() {
  return (
    <section
      className="hidden md:flex bg-contain bg-no-repeat bg-center py-16 justify-center"
      style={{ backgroundImage: "url('/CoursesPage/bg.png')" }}
    >
      <div className="mx-auto w-[75vw] flex gap-8 items-center text-white">
        {/* LEFT COLUMN */}
        <div className="flex-1 ml-[5vw]" style={{ flexBasis: '45%' }}>
          {/* Heading */}
          <h2 className="text-5xl font-extrabold uppercase text-white mb-6">
            THE MEMBERSHIP
          </h2>

          {/* Paragraph 1 */}
          <p className="text-base leading-relaxed mb-3 mt-50">
            Creative Wealth Society (CWS) is the
            <strong> only creator-exclusive society of its kind</strong>, built
            to help you earn, grow, connect and scale all in one place. Get
            direct access to real brand deals, job opportunities, and a rotating
            library of free resources for every creator level.
          </p>

          {/* Paragraph 2 */}
          <p className="text-base leading-relaxed mb-3">
            Customize your profile, showcase your offers with exclusive badges,
            and connect with the creator community inside our live social feed.
            Scroll, comment, and post alongside like-minded individuals while
            unlocking giveaways, portfolio audits, PR opportunities, and creator
            spotlight features.
          </p>

          {/* Paragraph 3 (bold) */}
          <p className="font-semibold italic mb-5">
            Welcome to your launchpad to build and grow your creative business.
          </p>

          {/* CTA Button */}
          <button className="bg-[#7b0c1c] hover:bg-[#9e0f25] transition text-white font-semibold px-6 py-3 rounded-full uppercase shadow-lg">
            CLAIM MY SPOT!
          </button>
        </div>

        {/* MIDDLE COLUMN (Square image) */}
        <div className="flex justify-center" style={{ flexBasis: '35%' }}>
          <img
            src="/CoursesPage/square-image.png" 
            alt="CWS Dashboard"
            className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT COLUMN (Vertical image) */}
        <div className="flex justify-center" style={{ flexBasis: '20%' }}>
          <img
            src="/CoursesPage/vertical-image.png"
            alt="CWS Creator"
            className="w-[280px] h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
