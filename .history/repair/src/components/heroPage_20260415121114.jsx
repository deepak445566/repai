import Image from 'next/image';

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-4 py-12 ">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Section - Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide">
              ✨ Welcome to the Future
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font- tracking-tight text-gray-900 leading-tight exo">
              Build Amazing Digital
              <span className="text-indigo-600 block"> Experiences Faster</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Create stunning web applications with modern tools and seamless workflows. 
              Our platform helps you bring your ideas to life with speed and precision.
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

          {/* Right Section - Image - Fixed */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60 -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden ">
                {/* Yahan size control karo - Simple way */}
                <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[550px]">
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