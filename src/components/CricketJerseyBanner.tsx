
import React from 'react';
import { motion } from 'framer-motion';

const CricketJerseyBanner = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-end justify-center pb-20">
            {/* Background Image - Using a cricket/sports theme placeholder since I cannot access the uploaded file directly. 
          The user can replace this source with their specific image. */}
            <div className="absolute inset-0 z-0">
                <img
                    src="7c.jpeg"
                    alt="Cricket Jerseys"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-bold uppercase italic tracking-tighter text-white mb-2"
                    style={{ fontFamily: 'Oswald, sans-serif' }} // Assuming Oswald or similar condensed font for sports look
                >
                    Cricket Jerseys <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">- Own Your Game</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-gray-300 text-lg md:text-2xl font-light tracking-widest uppercase mb-8"
                >
                    Shop the latest collections
                </motion.p>
            </div>
        </section>
    );
};

export default CricketJerseyBanner;
