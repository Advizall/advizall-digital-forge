import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-advizall-charcoal">
      <Navbar />
      <main className="pt-24 pb-16"> {/* Adjust padding as needed */}
        {/* You can add other About page content here if needed */}

        {/* Spline Scene Section */}
        <section className="relative h-[500px] md:h-[700px] w-full"> {/* Adjust height as needed */}
          {/* Consider adding a loading indicator */}
          <Spline
            scene="https://prod.spline.design/SjZjU-iraMGtrlW2/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </section>

        {/* More About page content can go here */}
      </main>
      <Footer />
    </div>
  );
};

export default About; 