import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, RotateCcw, CreditCard, Headphones } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jerseyImages = [
    'https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-3.11.12-PM.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-3.11.13-PM.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-3.11.13-PM-2.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-18-at-3.11.13-PM-1.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + jerseyImages.length) % jerseyImages.length);

  return (
    <div className="flex flex-col w-full">


      {/* 1. NEW VIDEO HEADER SECTION */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden pt-20">

        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 z-10 bg-black/10"></div>
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/500X1500.png"
            >
              <source src="/MA.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Mobile Gradient Overlay (Bottom Up) */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-900/95 to-transparent z-10 md:hidden"></div>

        {/* Desktop Angled Blue Gradient Overlay - Left Side */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[60%] lg:w-[55%] bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-800/80 z-10 shadow-2xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end md:items-center h-full pb-12 md:pb-0">
          <div className="w-full md:w-1/2 text-white p-4 md:p-0 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium mb-2 opacity-90 drop-shadow-md">
              The #1 Industrial-Grade <br /> Cricket Sublimation Manufacturer
            </h3>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-lg">
              Trusted By <br /> Entrepreneurs
            </h1>
            <a
              href="https://wa.me/917812865788?text=Hi%2C%20Welcome%20to%20Fast%20Colors%20Fashion!%20I'd%20like%20to%20place%20an%20order%20enquiry%20for%20custom%20Cricket%20Sublimation%20Jerseys.%20Please%20share%20pricing%20and%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 text-lg font-semibold py-3 md:py-4 px-8 md:px-10 rounded-md transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>


      {/* 2. EXISTING SLIDER SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Slider Section */}
          <div className="relative">
            {/* Navigation Arrows - Outside the card on large screens */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-2 text-blue-900 hover:text-blue-700 transition-colors hidden md:block"
            >
              <ChevronLeft size={40} strokeWidth={2.5} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-2 text-blue-900 hover:text-blue-700 transition-colors hidden md:block"
            >
              <ChevronRight size={40} strokeWidth={2.5} />
            </button>

            {/* Card Slider */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              {jerseyImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-16 max-w-2xl text-white">
                    <h2 className="text-xl md:text-5xl font-bold uppercase leading-tight mb-2 md:mb-4">
                      Design Your Team's <br /> Ultimate Jersey Today
                    </h2>

                    <div className="mb-2 md:mb-4">
                      <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-sm uppercase tracking-wider">
                        Limited Time Offer
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2 md:mb-4">
                      <span className="text-3xl md:text-6xl font-bold">30%</span>
                      <span className="text-lg md:text-3xl font-light uppercase">OFF</span>
                    </div>

                    <p className="text-xs md:text-lg text-gray-200 mb-4 md:mb-8 max-w-lg">
                      Premium professional cricket jerseys. Perfect for your team's victory and comfort on the field.
                    </p>

                    <a
                      href="https://wa.me/917812865788?text=Hi%2C%20I'd%20like%20to%20design%20a%20jersey%20for%20my%20team."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full w-fit transition-all text-xs md:text-sm uppercase tracking-wider shadow-lg inline-block"
                    >
                      Get Yours Today!
                    </a>
                  </div>
                </div>
              ))}

              {/* Dots Pagination */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {jerseyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-400/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>

              {/* Mobile Navigation Arrows (Inside card) */}
              <div className="absolute inset-0 flex justify-between items-center px-1 md:hidden pointer-events-none">
                <button onClick={prevSlide} className="p-2 pointer-events-auto text-white/70 hover:text-white">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-2 pointer-events-auto text-white/70 hover:text-white">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Features/Trust Banner */}
          <div className="mt-8 bg-blue-900 rounded-xl py-8 px-4 sm:px-8 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Feature 1 */}
              <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-blue-800 pb-4 md:pb-0 last:border-0">
                <Truck size={40} className="text-white flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-lg uppercase">Free Delivery</h3>
                  <p className="text-blue-200 text-xs uppercase tracking-wide">All over India above Rs.999</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-blue-800 pb-4 md:pb-0 last:border-0">
                <RotateCcw size={40} className="text-white flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-lg uppercase">7 Days Return</h3>
                  <p className="text-blue-200 text-xs uppercase tracking-wide">If goods have problems</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-blue-800 pb-4 md:pb-0 last:border-0">
                <CreditCard size={40} className="text-white flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-lg uppercase">Secure Payment</h3>
                  <p className="text-blue-200 text-xs uppercase tracking-wide">100% Secure Payment</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-4">
                <Headphones size={40} className="text-white flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-lg uppercase">Customer Care</h3>
                  <p className="text-blue-200 text-xs uppercase tracking-wide">10am to 7pm Except Sundays</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
