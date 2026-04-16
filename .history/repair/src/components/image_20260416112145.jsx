'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function MarqueeSlider() {
  const [stopScroll, setStopScroll] = useState(false);
  
  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: "/images/l1.jpeg",
    },
    {
      title: "Design Your Digital Future",
      image: "/images/l2.jpeg",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "/images/l3.jpeg",
    },
    {
      title: "Think Big, Code Smart",
      image: "/images/ac.jpg",
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

      <div className=" h-[50vh] lg:min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div 
          className="overflow-hidden w-full relative max-w-7xl mx-auto px-4"
          onMouseEnter={() => setStopScroll(true)} 
          onMouseLeave={() => setStopScroll(false)}
        >
        
          
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
                
                </div>
              ))}
            </div>
          </div>
          
     
        </div>
      </div>
    </>
  );
}