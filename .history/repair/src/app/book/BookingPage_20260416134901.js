'use client'

import Image from 'next/image';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get('service') || 'AC Repair';
  
  // Dynamic images mapping for each service
  const serviceImages = {
    'Ac Repair': '/images/ac1.jpeg',
    'Water Purifier': '/images/water.jpg',
    'Washing Machine': '/images/wash.jpg',
    'Refrigerator': '/images/refri.jpg',
    'Chimney Service': '/images/chimney2.webp',
    'Gas Stove & Hob Repair': '/images/gas1.jpg',
    'Gas Pipeline': '/images/pipe.jpg',
    'Plumber': '/images/plumber.jpg',
    'Carpenter': '/images/car.jpg',
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Service Booking Request*%0A%0A
*Service:* ${serviceName}%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Address:* ${formData.address}%0A
*Date:* ${formData.date}%0A
*Time:* ${formData.time}%0A%0A
*Thank you for booking!*`;
    
    // WhatsApp number
    const phoneNumber = '+919760075738';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
  };

  const currentImage = serviceImages[serviceName] || '/images/default-service.jpg';

  return (
    <div className="min-h-screen exo bg-[#FFFFFF] py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Book <span className="text-indigo-600">{serviceName}</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Fill the form below and get quick service at your doorstep
          </p>
        </div>

        {/* Main Content - Left Form | Right Image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side - Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Request Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Name (Auto-filled) */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={serviceName}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="2"
                  placeholder="Enter your full address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                    <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit Button - WhatsApp */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Book Now on WhatsApp →
              </button>
            </form>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="flex-1">
            <div className="sticky top-8">
              <div className=" p-4">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={`${serviceName} Service`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Quick Info Box */}
              <div className=" bg-white rounded-xl p-5 shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  Why Book With Us?
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                 
                  <p>✓ Trained & certified experts</p>
                  <p>✓ Same-day service available</p>
                  <p>✓ Best price guarantee</p>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}