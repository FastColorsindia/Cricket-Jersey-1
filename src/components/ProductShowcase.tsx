
import React from 'react';
import { motion } from 'framer-motion';


const row1Images = [
    'CSK.png ',
    'MI.png', // Replaced broken image
    'RR.png',
    'SRH.png',
    'KKR.png',
    'DC.png',
    'RCB.png',
    'DC.png',
];

const row2Images = [
    '/Gallery/JS1.jpg',
    '/Gallery/JS11.jpg',
    '/Gallery/RCB.webp',
    '/Gallery/RR.webp',
    '/Gallery/CSK.webp',
    '/Gallery/DC.webp',
    '/Gallery/RCB.webp',
    '/Gallery/JS12.jpg',
];

// Duplicate items multiple times to ensure we fill the screen for smooth loop
const duplicateItems = <T,>(items: T[], times: number = 4) => {
    return Array(times).fill(items).flat();
};

const MarqueeRow = ({ images, direction = 'left' }: { images: string[]; direction?: 'left' | 'right' }) => {
    return (
        // justify-center ensures that on huge screens or during load, the strip remains centered
        <div className="flex w-full overflow-hidden select-none">
            <motion.div
                className="flex gap-4 shrink-0"
                initial={{ x: direction === 'left' ? '0%' : '-33.33%' }}
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
                }}
                transition={{
                    duration: 40,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {/* We triple the list (and then some) to create a seamless loop. 
            By centering flex, we ensure we are looking at the 'middle' of the massive strip content. 
        */}
                {duplicateItems(images, 6).map((src, idx) => (
                    <div key={idx} className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-900 border border-gray-800 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <img
                            src={src}
                            alt="Product"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                                // Fallback for broken images
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556906781-9a412961d28c?w=500&q=80';
                            }}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const ProductShowcase = () => {
    return (
        <div className="bg-[#111111] text-white py-12 md:py-24 font-sans overflow-x-hidden">
            {/* 
        Refactored Layout: 
        1. Top container (constrained)
        2. Marquee container (full width)
        3. Bottom container (constrained)
      */}

            {/* 1. Header & Categories */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 md:mb-16 leading-tight">
                    130+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500">products</span>
                    <br />
                    to unveil your designs.
                </h2>
            </div>

            {/* 2. Marquee rows - Full width direct child */}
            <div className="w-full space-y-4 md:space-y-6 mb-12 md:mb-16">
                <MarqueeRow images={row1Images} direction="left" />
                <MarqueeRow images={row2Images} direction="right" />
            </div>

            {/* 3. CTA Button */}
            <div className="max-w-7xl mx-auto px-4 flex justify-center">
                <motion.a
                    href="https://wa.me/917812865788?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20or%20explore%20your%20design%20catalog."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-100 transition-all inline-block"
                >
                    Place Order / Contact Us
                </motion.a>
            </div>
        </div>
    );
};
