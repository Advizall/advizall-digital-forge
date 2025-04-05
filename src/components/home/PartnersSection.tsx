
import { useEffect, useRef } from 'react';

const partners = [
  { name: "Google", logo: "G" },
  { name: "Meta", logo: "M" },
  { name: "Nextdoor", logo: "N" },
  { name: "Yelp", logo: "Y" },
  { name: "Angi", logo: "A" },
  { name: "HomeAdvisor", logo: "H" },
  { name: "Thumbtack", logo: "T" },
  { name: "Houzz", logo: "H" }
];

const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sliderRef.current) return;
    
    const scrollWidth = sliderRef.current.scrollWidth;
    const clientWidth = sliderRef.current.clientWidth;
    
    if (scrollWidth <= clientWidth) return;
    
    let scrollPos = 0;
    const maxScroll = scrollWidth - clientWidth;
    const speed = 0.5; // pixels per frame
    
    const scroll = () => {
      if (!sliderRef.current) return;
      
      scrollPos += speed;
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }
      
      sliderRef.current.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-16 px-6 relative bg-advizall-charcoal border-t border-b border-advizall-silver-dark/20">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-medium text-center mb-10 text-advizall-silver-text">
          Trusted Partnerships & Platforms
        </h2>
        
        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex space-x-16 py-4 whitespace-nowrap overflow-x-auto scrollbar-none"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center flex-shrink-0 h-16 w-32 text-advizall-silver-light/70 hover:text-advizall-vividBlue-light transition-colors duration-300"
              >
                <div className="text-3xl font-bold">{partner.logo}</div>
                <div className="ml-2 text-lg font-medium">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
