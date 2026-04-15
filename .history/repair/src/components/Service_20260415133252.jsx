import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { id: 1, title: "AC Repair", image: "/images/acrepair.png", price: "From ₹499" },
    { id: 2, title: "Water Purifier", image: "/images/waterrepair.png", price: "From ₹399" },
    { id: 3, title: "Washing Machine", image: "/images/washrepair.png", price: "From ₹599" },
    { id: 4, title: "Refrigerator", image: "/images/fridgerepair.png", price: "From ₹699" },
    { id: 5, title: "Chimney Service", image: "/images/chimneyrepair.png", price: "From ₹449" },
    { id: 6, title: "Gas Stove & Hob", image: "/images/gasrepair.png", price: "From ₹349" },
    { id: 7, title: "Gas Pipeline", image: "/images/piperepair.png", price: "From ₹299" },
    { id: 8, title: "Plumber", image: "/images/plumberrepair.png", price: "From ₹399" },
    { id: 9, title: "Carpenter", image: "/images/carrepair.png", price: "From ₹499" },
  ];

  const handleBookNow = (serviceTitle) => {
    alert(`Booking service: ${serviceTitle}`);
    // Yahan apna booking logic daalo
    // e.g., router.push(`/book?service=${serviceTitle}`)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Most Used <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Professional repair services at your doorstep
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Section */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              {/* Title Section */}
              <div className="pt-3 px-2 text-center">
                <h3 className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-indigo-600 text-xs font-semibold mt-1">
                  {service.price}
                </p>
              </div>

              {/* Book Button */}
              <div className="px-2 pb-3 mt-1">
                <button
                  onClick={() => handleBookNow(service.title)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-semibold py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
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