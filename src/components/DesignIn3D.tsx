import { motion } from 'framer-motion';

const DesignIn3D = () => {
  return (
    <section id="design3d" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Design Your Cricket Jersey - In 3D In Real Time</h2>
            <p className="text-gray-700 mb-6">
              Choose your cricket jersey style, customize colors, add your team logo, player names and numbers - all in 3D and in real time.
              Preview your final design, share it with your team, and order when you're ready. Simple, fast and completely customizable.
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Real-time 3D preview of your cricket jersey design</li>
              <li>• Change colors, add team logos and edit player details instantly</li>
              <li>• Save designs and share with your entire cricket team</li>
              <li>• Order directly once your design is finalized</li>
            </ul>

            <a href="#" className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold shadow hover:bg-purple-800 transition">
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/904714.jpg"
                alt="3D customizer preview"
                className="w-full h-50% object-cover"
              />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignIn3D;
