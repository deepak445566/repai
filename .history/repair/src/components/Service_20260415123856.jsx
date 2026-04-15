import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { id: 1, title: "Web Development", image: "/images/web-dev.jpg" },
    { id: 2, title: "Mobile Apps", image: "/images/mobile-app.jpg" },
    { id: 3, title: "UI/UX Design", image: "/images/ui-ux.jpg" },
    { id: 4, title: "Cloud Services", image: "/images/cloud.jpg" },
    { id: 5, title: "Digital Marketing", image: "/images/digital-marketing.jpg" },
    { id: 6, title: "SEO Optimization", image: "/images/seo.jpg" },
    { id: 7, title: "Data Analytics", image: "/images/data-analytics.jpg" },
    { id: 8, title: "Cyber Security", image: "/images/cyber-security.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Most Used <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Professional solutions tailored for your business
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 80% Height Container for Image */}
              <div className="relative" style={{ height: '80%' }}>
                <div className="relative h-64 sm:h-72 lg:h-80 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* 20% Height Container for Title */}
              <div className="h-[20%] flex items-center justify-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
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