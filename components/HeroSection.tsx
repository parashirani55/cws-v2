import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-8">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            An Exclusive Society for{" "}
            <span className="text-gray-200">Creators</span>
          </h1>

          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-relaxed drop-shadow-lg">
            No More Guessing. No More Building{" "}
            <span className="italic font-light">Alone.</span>
          </p>

          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-12 leading-relaxed drop-shadow-lg">
            Just Strategy, Opportunity and Real{" "}
            <span className="text-gray-200">Connection.</span>
          </p>

          <button className="px-12 py-5 bg-red-900 text-white text-xl font-bold rounded-full hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl">
            GET INSTANT ACCESS
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white rounded-full opacity-60 animate-pulse delay-100"></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-white rounded-full opacity-50 animate-pulse delay-200"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-white rounded-full opacity-70 animate-pulse delay-300"></div>
      </div>
    </div>
  );
}
