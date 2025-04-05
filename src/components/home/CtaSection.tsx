
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 91, 234, 0.15) 0%, rgba(0, 198, 251, 0.1) 100%)',
          backdropFilter: 'blur(100px)'
        }}
      />
      
      {/* Animated particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-advizall-white">
            <span className="gradient-text">Ready to Elevate</span> Your Digital Presence?
          </h2>
          <p className="text-xl text-advizall-silver-text mb-10 max-w-2xl mx-auto">
            Let's create a tailored strategy to maximize your reach, increase conversions, and dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-md shadow-md hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">Get Your Free Audit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-advizall-silver-text text-advizall-silver-text hover:bg-advizall-silver-dark/10 font-semibold px-8 py-6 text-lg rounded-md"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
