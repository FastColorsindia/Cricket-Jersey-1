import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const galleryItems = [
        { id: 1, title: 'Custom T-Shirt Design', image: '/Gallery/JS1.jpg' },
        { id: 2, title: 'Hoodie Print Sample', image: '/Gallery/JS3.jpg' },
        { id: 3, title: 'Direct to Film Print', image: '/Gallery/JS2.jpg' },
        { id: 4, title: 'Fashion Apparel', image: '/Gallery/JS4.jpg' },
        { id: 5, title: 'CCC', image: '/Gallery/JS5.jpg' },
        { id: 6, title: 'Print Quality Sample', image: '/Gallery/JS6.jpg' },
        { id: 7, title: 'Premium Collection 10', image: '/Gallery/JS7.jpg' },
        { id: 8, title: 'Premium Collection 100', image: '/Gallery/JS8.jpg' },
        { id: 9, title: 'Premium Collection 101', image: '/Gallery/JS9.jpg' },
        { id: 10, title: 'Premium Collection 102', image: '/Gallery/JS10.jpg' },
        { id: 11, title: 'Premium Collection 103', image: '/Gallery/JS11.jpg' },
        { id: 12, title: 'Premium Collection 104', image: '/Gallery/JS12.jpg' },
        { id: 13, title: 'Premium Collection 116', image: '/Gallery/JS13.jpg' },
        { id: 14, title: 'Premium Collection 117', image: '/Gallery/JS14.jpg' },
        { id: 15, title: 'Premium Collection 118', image: '/Gallery/JS15.jpg' },
        { id: 16, title: 'Premium Collection 119', image: '/Gallery/JS16.jpg' },
        { id: 17, title: 'Premium Collection 121', image: '/Gallery/JS17.jpg' },
        { id: 18, title: 'Premium Collection 122', image: '/Gallery/JS18.jpg' },
        { id: 19, title: 'Premium Collection 134', image: '/Gallery/JS19.jpg' },
        { id: 20, title: 'Premium Collection 135', image: '/Gallery/JS20.jpg' },
        { id: 21, title: 'Premium Collection 136', image: '/Gallery/JS21.jpg' },
        { id: 22, title: 'Premium Collection 137', image: '/Gallery/JS22.jpg' },
        { id: 23, title: 'Premium Collection 138', image: '/Gallery/JS23.jpg' },
        { id: 24, title: 'Premium Collection 139', image: '/Gallery/JS24.jpg' },
        { id: 25, title: 'Premium Collection 150', image: '/Gallery/JS25.jpg' },
        { id: 26, title: 'Premium Collection 151', image: '/Gallery/JS26.jpg' },
        { id: 27, title: 'Premium Collection 152', image: '/Gallery/JS27.jpg' },
        { id: 28, title: 'Premium Collection 153', image: '/Gallery/JS28.webp' },
        { id: 29, title: 'Premium Collection 154', image: '/Gallery/JS29.jpg' },
        { id: 30, title: 'Premium Collection 155', image: '/Gallery/JS30.jpg' },
        { id: 31, title: 'Premium Collection 167', image: '/Gallery/JS51.jpg' },
        { id: 32, title: 'Premium Collection 168', image: '/Gallery/JS52.jpg' },
        { id: 33, title: 'Premium Collection 169', image: '/Gallery/JS53.jpg' },
        { id: 34, title: 'Premium Collection 170', image: '/Gallery/JS54.jpg' },
        { id: 35, title: 'Premium Collection 171', image: '/Gallery/JS55.png' },
        { id: 36, title: 'Premium Collection 172', image: '/Gallery/JS56.jpg' },
        { id: 37, title: 'Premium Collection 184', image: '/Gallery/JS57.webp' },
        { id: 38, title: 'Premium Collection 185', image: '/Gallery/JS58.jpg' },
        { id: 39, title: 'Premium Collection 186', image: '/Gallery/JS59.webp' },
        { id: 40, title: 'Premium Collection 187', image: '/Gallery/JS60.jpg' },
        { id: 41, title: 'Premium Collection 188', image: '/Gallery/JS61.jpg' },
        { id: 42, title: 'Premium Collection 189', image: '/Gallery/JS62.jpg' },
        { id: 43, title: 'Premium Collection 28', image: '/Gallery/JS63.jpg' },
        { id: 44, title: 'Premium Collection 29', image: '/Gallery/js64.webp' },
        { id: 45, title: 'Premium Collection 30', image: '/Gallery/JS65.jpg' },
        { id: 46, title: 'Premium Collection 31', image: '/Gallery/JS66.jpg' },
        { id: 47, title: 'Premium Collection 32', image: '/Gallery/JS67.jpg' },
        { id: 48, title: 'Premium Collection 33', image: '/Gallery/JS68.jpg' },
        { id: 49, title: 'Premium Collection 45', image: '/Gallery/JS69.jpg' },
        { id: 50, title: 'Premium Collection 46', image: '/Gallery/JS70.jpg' },
        { id: 51, title: 'Premium Collection 47', image: '/Gallery/JS71.jpg' },
        { id: 52, title: 'Premium Collection 48', image: '/Gallery/JS72.jpg' },
        { id: 53, title: 'Premium Collection 49', image: '/Gallery/JS73.jpg' },
        { id: 54, title: 'Premium Collection 50', image: '/Gallery/JS74.jpg' },
        { id: 55, title: 'Premium Collection 61', image: '/Gallery/JS75.jpg' },
        { id: 56, title: 'Premium Collection 62', image: '/Gallery/JS76.jpg' },
        { id: 57, title: 'Premium Collection 63', image: '/Gallery/JS77.jpg' },
        { id: 58, title: 'Premium Collection 64', image: '/Gallery/JS78.jpg' },
        { id: 59, title: 'Premium Collection 65', image: '/Gallery/JS65.jpg' },
        { id: 60, title: 'Premium Collection 66', image: '/Gallery/JS66.jpg' },
        { id: 61, title: 'Premium Collection 78', image: '/Gallery/JS78.jpg' },
        { id: 62, title: 'Premium Collection 79', image: '/Gallery/JS79.jpg' },
        { id: 63, title: 'Premium Collection 80', image: '/Gallery/JS80.jpg' },
        { id: 64, title: 'Premium Collection 82', image: '/Gallery/JS81.jpg' },
        { id: 65, title: 'Premium Collection 83', image: '/Gallery/JS82.jpg' },
        { id: 66, title: 'Premium Collection 84', image: '/Gallery/JS83.jpg' },
        { id: 67, title: 'Premium Collection 99', image: '/Gallery/JS94.jpg' },
        { id: 68, title: 'CSK Official Logo', image: '/Gallery/JS82.jpg' },
        { id: 69, title: 'DC Official Logo', image: '/Gallery/JS98.jpg' },
        { id: 70, title: 'RCB Official Logo', image: '/Gallery/JS94.jpg' },
        { id: 71, title: 'RR Official Logo', image: '/Gallery/JS1.jpg' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const GridSection = ({ title, items }: { title: string; items: any[] }) => (
        <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-gray-100 gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy-dark tracking-tight uppercase">
                    {title}
                </h2>
                <div className="bg-gray-100 text-gray-400 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {items.length} IMAGES
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                        className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-sm font-semibold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = galleryItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const gridSection = document.getElementById('gallery-grid');
        if (gridSection) {
            const navHeight = 100; // Account for fixed header
            const elementPosition = gridSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navigation />

            {/* Video Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <div className="absolute inset-0 z-10 bg-black/40"></div>
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/500X1500.png"
                        >
                            <source src="/MN.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="relative z-20 text-center px-4 animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter uppercase">
                        OUR GALLERY
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light uppercase tracking-widest">
                        Premium Sports Collections
                    </p>
                </div>
            </div>

            <main id="gallery-grid" className="flex-grow py-8 md:py-16 bg-white container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <GridSection title="OUR COLLECTIONS" items={paginatedItems} />

                {/* Pagination UI */}
                <div className="mt-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-lg text-sm font-semibold transition-all ${currentPage === 1
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${currentPage === page
                                    ? 'bg-[#1a1c2e] text-white shadow-lg'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-lg text-sm font-semibold transition-all ${currentPage === totalPages
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </main>

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
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-white text-center mt-6 text-2xl font-bold uppercase tracking-widest">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;
