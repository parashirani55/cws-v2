export default function WelcomeSection() {
  return (
    <section className="w-full bg-white flex items-center justify-center py-6 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Single Non-clickable, Non-draggable Image */}
        <img
          src="/AboutUs/Welcome-2.png"
          alt="Welcome"
          draggable="false"
          className="mx-auto h-auto select-none pointer-events-none"
          style={{
            width: "85vw",
            maxWidth: "1300px",
            userSelect: "none",
          }}
        />
      </div>
    </section>
  );
}
