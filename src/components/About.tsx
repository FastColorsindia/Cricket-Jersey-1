const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
              About Cricket Jersey Designs
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a dedicated cricket jersey design and manufacturing company committed to delivering high-quality, professional custom jerseys for cricket teams at all levels. With over 8 years of specialized cricket apparel experience, we've equipped hundreds of teams across India.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence in cricket jersey design and production has made us the preferred choice for amateur leagues, school teams, and professional franchises. We use premium breathable materials and advanced sublimation technology to ensure every jersey is comfortable, durable, and looks professional on the field.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Cricket Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
                <div className="text-gray-600">Customized Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <a
              href="https://wa.me/917812865788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
