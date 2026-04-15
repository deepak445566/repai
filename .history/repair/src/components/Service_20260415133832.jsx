'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();
  
  const services = [
    { id: 1, title: "Ac Repair", image: "/images/acrepair.png" },
    { id: 2, title: "Water Purifier", image: "/images/waterrepair.png" },
    { id: 3, title: "Washing Machine", image: "/images/washrepair.png" },
    { id: 4, title: "Refrigerator", image: "/images/fridgerepair.png" },
    { id: 5, title: "Chimney Service", image: "/images/chimneyrepair.png" },
    { id: 6, title: "Gas Stove & Hob Repair", image: "/images/gasrepair.png" },
    { id: 7, title: "Gas Pipeline", image: "/images/piperepair.png" },
    { id: 8, title: "Plumber", image: "/images/plumberrepair.png" },
    { id: 9, title: "Carpenter", image: "/images/carrepair.png" },
  ];

  const handleBookNow = (serviceTitle) => {
    // Navigate to booking page with service name
    router.push(`/book?service=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
            Most Used <span className="text-indigo-600">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Image Section */}
              <div className="relative h-20 sm:h-22 md:h-25">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              {/* Title Section */}
              <div className="py-2 px-1 text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
              </div>
              
              {/* Book Button */}
              <div className="px-2 pb-2">
                <button
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-black text-white text-xs font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all"
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}