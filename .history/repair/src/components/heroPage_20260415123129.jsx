import Image from 'next/image';

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Section - 60% Width */}
          <div className="w-full lg:w-[60%] text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide">
              ✨ Welcome to the Future
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight uppercase exo">
            Book Trusted Home
              <span className="text-indigo-600 block"> Services Near You</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 exo">
         Expert professionals for AC repair, cleaning, plumbing, appliances & more. Verified, insured, and guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105">
                Get Started →
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - 40% Width */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 opacity-60 -z-10"></div>
              <div className="relative overflow-hidden">
                {/* Size control - Apni hisaab se change karo */}
                <div className="relative w-[350px] h-[400px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[550px] mx-auto">
                  <Image
                    src="/images/image.png"
                    alt="Hero Image"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}