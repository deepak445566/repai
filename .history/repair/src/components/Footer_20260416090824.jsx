'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:9760075738';
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white exo">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="/images/footer.jpg" 
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
               <img src='/images/logo.png' className='w-70'/>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner for all home appliance repairs and maintenance. Professional, reliable, and affordable service at your doorstep.
              </p>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.577-11.857c0-.21-.005-.425-.015-.636A10.01 10.01 0 0024 4.555z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-indigo-500 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-indigo-500 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-indigo-500 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="text-gray-300 hover:text-indigo-500 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">AC Repair</li>
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">Water Purifier</li>
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">Washing Machine</li>
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">Refrigerator</li>
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">Chimney Service</li>
                <li className="text-gray-300 hover:text-indigo-500 transition-colors cursor-pointer">Plumber & Carpenter</li>
              </ul>
            </div>

            {/* Column 4 - Contact Info & Newsletter */}
           <div className="space-y-4">
  <h3 className="text-lg font-semibold text-white">Contact Us</h3>
  <div className="space-y-3">
    <div className="flex items-center gap-3 text-gray-300">
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>+91 9760075738</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span>dialnayara@gmail.com</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Bangalore, Karnataka, Koramangala - 560047</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <span>F 28, 60 Futa Road, Ved Vihar, Loni, Ghaziabad - 201102</span>
    </div>
    <div className="flex items-center gap-3 text-gray-300">
      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Service available across India</span>
    </div>
  </div>
</div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-10 pt-8 border-t border-white/20 text-center">
            <button
              onClick={handleCallClick}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Need Help? Call Us Now: +91 9760075738
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Nayara Dial Home Service. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Professional home appliance repair services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}