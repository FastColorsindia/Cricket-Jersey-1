import { Shirt, Palette, Zap, Award, Users, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Custom Cricket Jerseys',
      description: 'High-quality custom cricket jerseys with vibrant full-color sublimation printing and personalized designs.'
    },
    {
      icon: Palette,
      title: 'Design Customization',
      description: 'Complete design service with team logos, player names, and numbers tailored to your cricket team.'
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'Quick turnaround times without compromising quality. Perfect for tournament season deadlines.'
    },
    {
      icon: Users,
      title: 'Team Orders',
      description: 'Special pricing and dedicated support for cricket teams of all sizes and levels.'
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'Only the finest breathable fabrics designed for comfort and performance on the cricket field.'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Reliable shipping to cricket clubs and teams across India with tracking and support.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Sublimation jersey design and manufacturing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-4 rounded-full bg-[#BD22B8]/10 mb-6 group-hover:bg-[#BD22B8] transition-colors duration-300">
                  <Icon className="text-[#BD22B8] group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-navy-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-[#BD22B8] font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
