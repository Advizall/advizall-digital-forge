
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Update custom properties for the light effect
      heroRef.current.style.setProperty('--x-pos', `${x * 100}%`);
      heroRef.current.style.setProperty('--y-pos', `${y * 100}%`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
      style={{
        background: `var(--bg-gradient, radial-gradient(circle at var(--x-pos, 50%) var(--y-pos, 50%), rgba(0, 198, 251, 0.15), transparent 70%)), 
                     radial-gradient(circle at 20% 80%, rgba(0, 91, 234, 0.1), transparent 50%),
                     linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)`,
        '--x-pos': '50%',
        '--y-pos': '50%'
      } as any}
    >
      {/* Animated particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 lg:pr-12 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-advizall-white">
            <span className="gradient-text blue-shadow">Fueling Growth.</span>
            <br />
            <span>Driving Results.</span>
          </h1>
          
          <p className="text-xl text-advizall-silver-text leading-relaxed">
            Advizall is a leading digital marketing agency specializing in paid traffic, organic growth strategies, and premium local networks to maximize your reach and dominate your market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild
              className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">
                Get Your Free Audit <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-advizall-vividBlue-light text-advizall-vividBlue-light hover:bg-advizall-vividBlue-light/10 font-semibold px-8 py-6 rounded-md"
            >
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-6 items-center">
            <p className="text-advizall-silver-text mr-4">Trusted by leading brands:</p>
            <div className="flex flex-wrap gap-6">
              {['Google', 'Meta', 'Nextdoor', 'Yelp', 'Angi'].map((brand) => (
                <div key={brand} className="text-advizall-silver-light/60 text-sm font-semibold">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center mx-auto">
          <div className="absolute w-full h-full rounded-full 
                          bg-gradient-to-r from-advizall-vividBlue-dark/40 to-advizall-vividBlue-light/40 
                          blur-3xl opacity-70 animate-pulse-glow z-0"
               style={{
                 filter: 'blur(40px)',
                 transform: 'scale(1.2)',
               }}></div>
          <div className="relative z-10 w-full max-w-md animate-float">
            <img
              src="/lovable-uploads/039859B6-5911-4D55-993B-6E74B1D840DF.png"
              alt="Advizall Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
