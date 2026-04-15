import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { id: 1, title: "Web Development", image: "/images/image" },
    { id: 2, title: "Mobile Apps", image: "/images/mobile-app.jpg" },
    { id: 3, title: "UI/UX Design", image: "/images/ui-ux.jpg" },
    { id: 4, title: "Cloud Services", image: "/images/cloud.jpg" },
    { id: 5, title: "Digital Marketing", image: "/images/digital-marketing.jpg" },
    { id: 6, title: "SEO Optimization", image: "/images/seo.jpg" },
    { id: 7, title: "Data Analytics", image: "/images/data-analytics.jpg" },
    { id: 8, title: "Cyber Security", image: "/images/cyber-security.jpg" }
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
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden bg-gray-200">
                {/* Placeholder - Replace with your images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                {/* Actual Image - Uncomment when ready */}
                {/* <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
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