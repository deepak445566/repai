import Image from 'next/image';

export default function ServicesPage() {
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 exo">
            Most Used <span className="text-indigo-600">Services</span>
          </h2>
         
        </div>

        {/* Grid - Mobile: 2 columns, Desktop: 6 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4 exo">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-18 sm:h-22 md:h-25 overflow-hidden ">
                {/* Placeholder - Replace with your images */}
               
                {/* Actual Image - Uncomment when ready */}
                <Image src={service.image} alt={service.title} fill className="object-contain  transition-transform duration-500" />
              </div>
              
              {/* Title Section */}
              <div className="py-2 px-1 sm:py-2.5 sm:px-2 text-center">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors leading-tight">
                  {service.title}
                </h3>
              </div>
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