'use client'

import Image from 'next/image';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get('service') || 'AC Repair';
  
  // Dynamic images mapping for each service
  const serviceImages = {
    'Ac Repair': '/images/ac.jpg',
    'Water Purifier': '/images/water.jpg',
    'Washing Machine': '/images/wash.jpg',
    'Refrigerator': '/images/refri.jpg',
    'Chimney Service': '/images/chimney.jpg',
    'Gas Stove & Hob Repair': '/images/gas-stove-service.jpg',
    'Gas Pipeline': '/images/gas-pipeline-service.jpg',
    'Plumber': '/images/plumber-service.jpg',
    'Carpenter': '/images/carpenter-service.jpg',
  };

  // Dynamic benefits for each service
  const serviceBenefits = {
    'AC Repair': [
      'Free gas refilling check',
      'Filter cleaning included',
      '90 days warranty on repair',
      'Same-day service available'
    ],
    'Water Purifier': [
      'Free filter inspection',
      'RO membrane testing',
      'TDS check included',
      '3 months service warranty'
    ],
    'Washing Machine': [
      'Free drum inspection',
      'Motor testing included',
      '30 days warranty',
      'Quick doorstep service'
    ],
    'Refrigerator': [
      'Free gas leakage check',
      'Compressor testing',
      'Thermostat calibration',
      '90 days warranty'
    ],
    'Chimney Service': [
      'Free filter cleaning',
      'Motor checking',
      'Duct cleaning included',
      '30 days service warranty'
    ],
    'Gas Stove & Hob Repair': [
      'Free burner testing',
      'Gas leakage check',
      'All spare parts available',
      'Same-day repair'
    ],
    'Gas Pipeline': [
      'Free leakage detection',
      'Pressure testing',
      'Safety certificate provided',
      'Emergency service'
    ],
    'Plumber': [
      'Free inspection',
      'Leakage repair',
      'Pipe replacement',
      '24/7 emergency service'
    ],
    'Carpenter': [
      'Free estimate',
      'Quality wood work',
      'Polishing included',
      'Warranty on work'
    ]
  };

  const defaultBenefits = [
    'Free inspection & estimate',
    '30 days service warranty',
    'Trained & certified experts',
    'Same-day service available',
    'Best price guarantee'
  ];

  const currentImage = serviceImages[serviceName] || '/images/default-service.jpg';
  const currentBenefits = serviceBenefits[serviceName] || defaultBenefits;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${serviceName}!`);
    // Yahan apna API call lagao
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

              {/* Additional Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Describe your issue or special requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Confirm Booking →
              </button>
            </form>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="flex-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-4 shadow-xl">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={`${serviceName} Service`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Dynamic Quick Info - Benefits change according to service */}
              <div className="mt-6 bg-white rounded-xl p-5 shadow-md">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  Why Book {serviceName} With Us?
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {currentBenefits.map((benefit, index) => (
                    <p key={index}>✓ {benefit}</p>
                  ))}
                </div>
                
                {/* Price Indicator */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-indigo-600 font-semibold">
                    Starting from ₹399 only!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}