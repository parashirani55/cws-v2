export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img 
              src="/footer/image.png" 
              alt="Creative Wealth Society" 
              className="w-56 sm:w-64 h-auto object-contain"
            />
          </div>

          {/* Navigate Section */}
          <div>
            <h4 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-700 transition-colors">Courses + Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-700 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-700 transition-colors">Prices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-700 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-4">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:hello@creativewealthsociety.com" className="flex items-center gap-2 text-gray-600 hover:text-rose-700 transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm sm:text-base break-words">hello@creativewealthsociety.com</span>
              </a>
              <div className="pt-2">
                <p className="text-gray-600 text-sm sm:text-base mb-2">For Brands or Businesses,</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 underline text-sm sm:text-base font-medium">Access Here</a>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mb-4">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-wrap gap-4 sm:gap-9 justify-start mb-4 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Terms of Service</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Privacy Statement</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Refund Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Shipping Delivery Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Affiliate Disclosure</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-rose-700 transition-colors whitespace-nowrap">Earnings Disclaimer</a>
          </div>
          <p className="text-left text-sm text-gray-600">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
