import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:py-16 exo">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Image */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-indigo-600">Our Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Professional repair services you can trust for all your home appliances
          </p>
        </div>

        {/* Features Grid - Mobile: 2 columns, Tablet/Desktop: 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-black exo">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Verified Professionals</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">All service providers are thoroughly verified and trained experts</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Transparent Pricing</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">No hidden charges. Upfront pricing before booking</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Background Checked</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Strict background verification for your safety</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">On-Time Guarantee</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Punctual service delivery as per your schedule</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Quality Service</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">100% satisfaction guaranteed for all appliances</p>
          </div>

        </div>
      </div>
    </div>
  );
}