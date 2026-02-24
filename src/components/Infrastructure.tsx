import { Zap, Droplet, Thermometer, Radio } from 'lucide-react';

const Infrastructure = () => {
  const machines = [
    {
      icon: Droplet,
      title: 'Sublimation Printers',
      description: 'Professional sublimation printers for vibrant, detailed cricket jersey designs.'
    },
    {
      icon: Thermometer,
      title: 'Heat Press Equipment',
      description: 'Advanced heat presses for perfect sublimation transfer on cricket jerseys.'
    },
    {
      icon: Zap,
      title: 'Curing Systems',
      description: 'Fast curing technology for quick and efficient production turnaround.'
    },
    {
      icon: Radio,
      title: 'Quality Testing',
      description: 'State-of-the-art testing equipment to ensure every jersey meets standards.'
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sports Jersey Facility
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Equipped with advanced sublimation technology for premium cricket jerseys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {machines.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex p-6 bg-[#BD22B8]/20 rounded-full mb-6 group-hover:bg-[#BD22B8] transition-colors duration-300">
                  <Icon className="text-[#BD22B8] group-hover:text-white transition-colors" size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {machine.title}
                </h3>
                <p className="text-gray-400">
                  {machine.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-navy-dark rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Production Capacity
              </h3>
              <ul className="space-y-4">
                {[
                  '5000+ units per Day',
                  'Quick turnaround times',
                  'Custom order flexibility',
                  'Quality tested every item',
                  'Eco-friendly inks',
                  '24/7 production capability'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4464482/pexels-photo-4464482.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
