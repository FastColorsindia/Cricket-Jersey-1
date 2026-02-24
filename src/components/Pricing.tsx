import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '299',
      description: 'Perfect for small cricket teams',
      features: [
        'Up to 20 jerseys',
        'Basic custom design',
        'Standard delivery',
        'Email support',
        'Team logo included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '599',
      description: 'Most popular for cricket clubs',
      features: [
        'Up to 50 jerseys',
        'Advanced custom design',
        'Express delivery',
        'Priority support',
        'Team logo & player names',
        'Design mockups'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '999',
      description: 'For large cricket organizations',
      features: [
        'Unlimited jerseys',
        'Dedicated design team',
        'Rush delivery available',
        '24/7 cricket specialist support',
        'Custom graphics & branding',
        'Volume discount',
        'Free samples'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Cricket Jersey Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable pricing plans for cricket teams of all sizes
          </p>
        </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable sublimation printing for every budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? 'ring-2 ring-purple-600 shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              <div className={`p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-navy-dark text-white'
                  : 'bg-white'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-navy-dark'
                }`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 text-sm ${
                  plan.popular ? 'text-purple-100' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-navy-dark'
                  }`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${
                    plan.popular ? 'text-purple-100' : 'text-gray-600'
                  }`}>
                    per order
                  </span>
                </div>

                <button className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  Order Now
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`${
                        plan.popular ? 'text-white' : 'text-purple-600'
                      }`} size={20} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
