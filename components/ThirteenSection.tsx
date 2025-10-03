'use client';
import { useState, useEffect, useRef } from 'react';

export default function AskMeAnything() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ---------------- Mouse & Touch Handlers ----------------
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const maxWidth = rect.width - 120; // Button width
    const currentX = e.clientX - rect.left - 60; // Center of button
    const newPosition = Math.max(0, Math.min(100, (currentX / maxWidth) * 100));

    setSliderPosition(newPosition);
  };

  const handleMouseUp = () => {
    if (sliderPosition >= 85) {
      handleSubmit();
    } else {
      setSliderPosition(0);
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const maxWidth = rect.width - 120;

    const touch = e.touches[0];
    const currentX = touch.clientX - rect.left - 60;
    const newPosition = Math.max(0, Math.min(100, (currentX / maxWidth) * 100));

    setSliderPosition(newPosition);
  };

  const handleTouchEnd = () => {
    if (sliderPosition >= 85) {
      handleSubmit();
    } else {
      setSliderPosition(0);
    }
    setIsDragging(false);
  };

  const handleSubmit = () => {
    if (question.trim() && email.trim()) {
      setSliderPosition(100);
      setIsSubmitted(true);
      setShowConfetti(true);

      setTimeout(() => {
        setQuestion('');
        setEmail('');
        setSliderPosition(0);
        setShowConfetti(false);
        setTimeout(() => setIsSubmitted(false), 300);
      }, 3000);
    } else {
      setSliderPosition(0);
      alert('Please fill in both question and email fields!');
    }
  };

  // ---------------- Attach/Detach Document Events ----------------
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, sliderPosition]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#ef4444', '#fbbf24', '#10b981', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div 
        ref={sectionRef}
        className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Form */}
          <div 
            className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-red-900 mb-8 md:mb-12 leading-tight">
              Ask Me Anything
            </h2>

            {/* Question Input */}
            <div className="mb-6 group">
              <input
                type="text"
                placeholder="Write your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-red-900 focus:ring-opacity-30 focus:border-red-900 transition-all duration-300 group-hover:shadow-md"
              />
            </div>

            {/* Email Input */}
            <div className="mb-8 group">
              <input
                type="email"
                placeholder="Enter Email Address Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-800 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-red-900 focus:ring-opacity-30 focus:border-red-900 transition-all duration-300 group-hover:shadow-md"
              />
            </div>

            {/* Slider Submit Button */}
            <div className="mb-4">
              <div 
                ref={sliderRef}
                className="relative h-16 bg-gray-200 rounded-full overflow-hidden cursor-pointer select-none shadow-inner"
              >
                {/* Background Progress */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-900 transition-all duration-300 rounded-full"
                  style={{ 
                    width: `${sliderPosition}%`,
                    opacity: sliderPosition > 0 ? 1 : 0
                  }}
                />
                
                {/* Submit Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <span className={`text-sm md:text-base font-bold transition-all duration-300 ${
                    sliderPosition > 30 ? 'text-white scale-110' : 'text-gray-600 scale-100'
                  }`}>
                    {sliderPosition >= 85 ? '🎉 RELEASE TO SUBMIT!' : 'SLIDE TO SUBMIT →'}
                  </span>
                </div>

                {/* Slider Button */}
                <div
                  className={`absolute top-1 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 border-4 ${
                    isDragging ? 'border-red-700 scale-110' : 'border-red-900 scale-100'
                  }`}
                  style={{ 
                    width: '120px',
                    left: `calc(${sliderPosition}% * (100% - 120px - 8px) / 100 + 4px)`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    zIndex: 20
                  }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  <svg 
                    className={`w-7 h-7 text-red-900 transition-transform duration-200 ${
                      isDragging ? 'scale-125' : 'scale-100'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              {/* Helper Text */}
              <p className="text-xs text-gray-500 mt-2 text-center">
                Drag the button to the right to submit
              </p>
            </div>

            {/* Success Animation */}
            {isSubmitted && (
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-slideDown shadow-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-green-800 font-semibold text-base md:text-lg flex-1">
                  Question submitted successfully! 🎉
                </span>
              </div>
            )}
          </div>

          {/* Right Section - Image */}
          <div 
            className={`flex items-center justify-center transition-all duration-1000 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="relative">
              {/* Speech Bubble with Question Mark */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 animate-bounce">
                <span className="text-4xl md:text-6xl text-yellow-500 font-bold">?</span>
              </div>
              
              {/* Main Image Frame */}
              <div className="relative bg-gradient-to-br from-red-900 to-red-700 rounded-3xl overflow-hidden shadow-2xl p-1 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                <div className="bg-black rounded-3xl overflow-hidden p-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" 
                    alt="Professional consultant"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl"
                  />
                  
                  {/* Red gradient overlay */}
                  <div className="absolute inset-4 bg-gradient-to-b from-transparent via-transparent to-red-900 opacity-40 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-confetti {
          animation: confetti linear forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
