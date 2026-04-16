'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageSlider() {
  const images = [
    { id: 1, src: '/images/gallery/img1.jpg', title: 'AC Service', description: 'Professional AC repair and maintenance' },
    { id: 2, src: '/images/gallery/img2.jpg', title: 'Plumbing Service', description: 'Expert plumbing solutions' },
    { id: 3, src: '/images/gallery/img3.jpg', title: 'Cleaning Service', description: 'Deep cleaning for your home' },
    { id: 4, src: '/images/gallery/img4.jpg', title: 'Electrical Work', description: 'Safe and reliable electrical services' },
    { id: 5, src: '/images/gallery/img5.jpg', title: 'Appliance Repair', description: 'Quick appliance fixes' },
    { id: 6, src: '/images/gallery/img6.jpg', title: 'Painting Service', description: 'Professional painting work' },
    { id: 7, src: '/images/gallery/img7.jpg', title: 'Carpentry', description: 'Custom carpentry solutions' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            See what our experts can do for you
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
            <div className="relative w-full h-64 sm:h-96 md:h-[500px]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {images[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {images[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-200 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-indigo-600'
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
          >
            {isAutoPlaying ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}