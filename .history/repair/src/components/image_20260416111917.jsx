'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function MarqueeSlider() {
  const [stopScroll, setStopScroll] = useState(false);
  
  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: "",
    },
    {
      title: "Design Your Digital Future",
      image: "",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
    },
    {
      title: "Think Big, Code Smart",
      image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <style jsx>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div 
          className="overflow-hidden w-full relative max-w-7xl mx-auto px-4"
          onMouseEnter={() => setStopScroll(true)} 
          onMouseLeave={() => setStopScroll(false)}
        >
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-gray-100 to-transparent" />
          
          {/* Marquee Container */}
          <div 
            className="marquee-inner flex w-fit"
            style={{ 
              animationPlayState: stopScroll ? "paused" : "running", 
              animationDuration: (cardData.length * 2.5) + "s" 
            }}
          >
            <div className="flex">
              {/* Double the cards for seamless loop */}
              {[...cardData, ...cardData].map((card, index) => (
                <div 
                  key={index} 
                  className="w-64 sm:w-72 md:w-80 mx-4 h-80 md:h-96 relative group hover:scale-90 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    />
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/50">
                    <p className="text-white text-lg md:text-xl font-semibold text-center">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-gray-100 to-transparent" />
        </div>
      </div>
    </>
  );
}