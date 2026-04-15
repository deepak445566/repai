'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = steps.map((_, i) => {
      return setTimeout(() => {
        setVisibleSteps(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 200);
    });
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const steps = [
    {
      number: "01",
      title: "Choose Service",
      description: "Select from our wide range of home services",
      color: "blue",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Book Slot",
      description: "Pick a convenient date and time slot",
      color: "purple",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Service at Doorstep",
      description: "Our expert arrives and gets the job done",
      color: "orange",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Enjoy & Relax",
      description: "Pay securely after service completion",
      color: "green",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];


  const bgColors = {
    blue: "bg-black group-hover:bg-blue-100",
    purple: "bg-purple-50 group-hover:bg-purple-100",
    orange: "bg-orange-50 group-hover:bg-orange-100",
    green: "bg-green-50 group-hover:bg-green-100"
  };

  const textColors = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    green: "text-green-600"
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background Decoration - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Creative Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="bg-indigo-100 text-indigo-600 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
              Simple Process
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
            How <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">RightCliqhub</span> Works
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Get your tasks done in 4 simple steps
          </p>
        </div>

        {/* Steps Grid - Fully Responsive */}
        <div className="relative">
          {/* Connecting Lines - Hidden on mobile & tablet, show on desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-500 rounded-full left-[12.5%]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full left-[37.5%]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full left-[62.5%]"></div>
          </div>

          {/* Grid - Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`group relative transition-all duration-700 transform ${
                  visibleSteps[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {/* Card - Responsive padding */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Icon Circle - Responsive sizes */}
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-5 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg transform rotate-0 group-hover:rotate-12 transition-all duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                 
                  </div>

                  {/* Step Number Badge - Responsive */}
                  <div className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ${bgColors[step.color]} rounded-full flex items-center justify-center shadow-md`}>
                    <span className={`text-xs sm:text-sm font-black ${textColors[step.color]}`}>{step.number}</span>
                  </div>
                  
                  {/* Title - Responsive text */}
                  <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 transition-colors ${
                    step.title === "Service at Doorstep" ? "text-xs sm:text-sm md:text-base lg:text-lg" : ""
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Description - Responsive text */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom Decoration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get Started Now →
          </button>
        </div>
      </div>
    </div>
  );
}