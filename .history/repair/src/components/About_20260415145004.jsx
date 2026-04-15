'use client'

import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-white py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 md:gap-16">
          
          {/* Left Side - Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-us.jpg"
                alt="About Nayara Dial Home Service"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Side - About Us Content */}
          <div className="flex-1 w-full">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
                About Us
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Nayara Dial{" "}
                <span className="text-indigo-600">Home Service</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Nayara Dial Home Service is your trusted partner for all home appliance repairs and maintenance. 
                We provide professional, reliable, and affordable services for AC, refrigerators, washing machines, 
                water purifiers, and all other home appliances. Our team of certified experts ensures quality service 
                with 100% customer satisfaction. With transparent pricing and on-time guarantee, we make appliance 
                repair hassle-free and convenient for you.
              </p>
              
              {/* Optional: Small stats or trust signals */}
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">5000+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}