import Hero from '../components/Hero';
import DesignIn3D from '../components/DesignIn3D';
import { ProductShowcase } from '../components/ProductShowcase';
import WhatWeDo from '../components/WhatWeDo';
import CricketJerseyBanner from '../components/CricketJerseyBanner';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ShopByCategory from '../components/ShopByCategory';
import Infrastructure from '../components/Infrastructure';
import Blog from '../components/Blog';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ClubCollections from '../components/ClubCollections';
import EnquirySection from '../components/EnquirySection';

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <ClubCollections />

      {/* 3D Designer Section added as requested */}
      <DesignIn3D />

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* What We Do section */}
      <WhatWeDo />

      {/* Cricket Jersey Banner */}
      <CricketJerseyBanner />

      <Services />
      <ShopByCategory />
      <Gallery />
      <Infrastructure />
      <Blog />
      <About />

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">For general enquiries, partnerships or support, reach out to us below.</p>
        </div>
      </section>

      {/* Enquiry Section */}
      <EnquirySection />


      {/* Location Section */}
      <section id="location" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <p className="text-gray-700">Visit our office at:</p>
          <div className="mt-2 text-gray-800">
            <address className="not-italic">
              72, KNP Subramaniam Nagar Pudur, Pirivu,<br />
              Dharapuram Road, Tiruppur,<br />
              Tamil Nadu 641604
            </address>

            <div className="mt-4 w-full h-64">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-2">
              <a href="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604" target="_blank" rel="noopener noreferrer" className="text-blue-600">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
};

export default Home;
