import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const galleryItems = [
    { id: 1, title: '#1', image: '/Gallery/CSK.webp' },
    { id: 2, title: '#2', image: '/Gallery/DC.webp' },
    { id: 3, title: '#3', image: '/Gallery/RCB.webp' },
    { id: 4, title: '#4', image: '/Gallery/RR.webp' },
    { id: 5, title: '#5', image: '/Gallery/JS1.jpg' },
    { id: 6, title: '#6', image: '/Gallery/JS3.jpg' },
  ];

  const GridSection = ({ items }: { items: any[] }) => (
    <div className="mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our collection of stunning fashion prints and custom designs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage({ image: item.image, title: item.title })}
            className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-lg font-medium tracking-wide">{item.title}</p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-500"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/gallery"
          className="inline-flex items-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-red-200"
        >
          View More <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GridSection items={galleryItems} />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors p-2"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-6 text-2xl font-bold uppercase tracking-widest">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
