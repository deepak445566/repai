import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { id: 1, title: "Ac Repair", image: "/images/fridgerepair.png" },
  { id: 2, title: "Water Purifier", image: "/images/fridgerepair.png" },
    { id: 3, title: "Washing Machine", image: "/images/fridgerepair.png" },
      { id: 4, title: "Refrigerator", image: "/images/fridgerepair.png" },
        { id: 5, title: "Chimney Service", image: "/images/fridgerepair.png" },
          { id: 6, title: "Gas Stove & Hob Repair", image: "/images/fridgerepair.png" },
            { id: 7, title: "Gas Pipeline", image: "/images/fridgerepair.png" },
              { id: 8, title: "", image: "/images/fridgerepair.png" },
                { id: 9, title: "", image: "/images/fridgerepair.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Most Used <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Professional solutions for your business
          </p>
        </div>

        {/* Grid - Mobile: 2 columns, Desktop: 6 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-32 sm:h-36 md:h-20 overflow-hidden ">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}