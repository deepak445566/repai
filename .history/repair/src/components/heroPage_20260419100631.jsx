'use client'

import Image from 'next/image';

export default function HeroPage() {
  // Phone number - you can update this as needed
  const phoneNumber = "+919760075738";
  const whatsappNumber = "919760075738"; // Without '+' for WhatsApp API

  const handleBookNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Main Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-4 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            
            {/* Left Section - 60% Width */}
            <div className="w-full lg:w-[55%] text-center lg:text-left space-y-6 mt-10 lg:mt-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide">
                ✨ Welcome to the Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight uppercase exo">
                Book Trusted Home
                <span className="text-indigo-600 block"> Services Near You</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 exo">
                Expert professionals for AC repair, cleaning, plumbing, appliances & more. Verified, insured, and guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                {/* Explore Services - Hash link */}
                <a
                  href="#services"
                  className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Explore Services →
                </a>
                
                {/* Book Now - Phone number dial */}
                <button
                  onClick={handleBookNow}
                  className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Section - 40% Width */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 opacity-60 -z-10"></div>
                <div className="relative overflow-hidden">
                  <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[400px] lg:w-[450px] lg:h-[500px] mx-auto">
                    <Image
                      src="/images/op1.png"
                      alt="Hero Image"
                      fill
                      className="object-contain h-100 w-100 p-4 mt-8 bg-blue-500 rounded-t-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp and Phone Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.55 3.66 1.56 5.2L2 22l4.8-1.56C8.34 21.45 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.07-.44-4.36-1.27l-.31-.19-2.85.93.93-2.85-.19-.31A7.97 7.97 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </button>

        {/* Phone Button */}
        <button
          onClick={handlePhoneCall}
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Phone Call"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
    </>
  );
}