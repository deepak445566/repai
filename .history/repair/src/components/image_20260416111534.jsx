'use client'

import Image from 'next/image';

export default function SimpleGallery() {
  const images = [
    { id: 1, src: '/images/gallery/img1.jpg', title: 'AC Service' },
    { id: 2, src: '/images/gallery/img2.jpg', title: 'Plumbing' },
    { id: 3, src: '/images/gallery/img3.jpg', title: 'Cleaning' },
    { id: 4, src: '/images/gallery/img4.jpg', title: 'Electrical' },
    { id: 5, src: '/images/gallery/img5.jpg', title: 'Appliance Repair' },
    { id: 6, src: '/images/gallery/img6.jpg', title: 'Painting' },
    { id: 7, src: '/images/gallery/img7.jpg', title: 'Carpentry' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}