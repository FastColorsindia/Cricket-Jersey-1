import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "RAJESH KUMAR",
        role: "Captain, City Strikers CC",
        content: "The custom cricket jerseys we ordered are phenomenal. The sublimation quality is top-notch and the colors are incredibly vibrant. The fabric is breathable and perfect for long matches.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        category: "Cricket Jersey x 50"
    },
    {
        id: 2,
        name: "SURESH R.",
        role: "Sports Coordinator, Academy",
        content: "Best jersey printing facility in Tiruppur. They handled our 200+ jersey order with ease and the turnaround time was amazing. The 3D design tool made visualization so simple.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        category: "Club Collections x 200"
    },
    {
        id: 3,
        name: "ANITA SHARMA",
        role: "Team Manager, United CC",
        content: "Our team looks professional on the field now. The fit is perfect and the material keeps the players cool. Excellent customer service and attention to detail!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        category: "Women's Cricket Kit x 30"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Join hundreds of satisfied teams who trust us with their custom cricket jerseys
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-purple-600 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-400 hover:text-purple-600 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="relative h-[400px] md:h-[350px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-start relative mx-auto max-w-2xl">
                                    {/* Quote Icon */}
                                    <div className="mb-6 text-orange-200">
                                        <Quote size={48} fill="currentColor" className="opacity-50" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} fill="#F97316" color="#F97316" />
                                        ))}
                                    </div>

                                    {/* Testimonial Content */}
                                    <blockquote className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-8">
                                        "{testimonials[currentIndex].content}"
                                    </blockquote>

                                    {/* Profile */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-purple-100"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 tracking-wide uppercase">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {testimonials[currentIndex].category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-orange-500' : 'w-2.5 bg-gray-200'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
