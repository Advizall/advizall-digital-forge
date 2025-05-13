import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Miles Cabinets Refacing",
    image: "/lovable-uploads/milesrefacing.png",
    description: "Premium cabinet refacing services website with a modern, elegant design.",
    url: "#",
  },
  {
    id: 2,
    title: "PACC Solutions LLC",
    image: "/lovable-uploads/paccsolutions.png",
    description: "Professional business solutions platform with custom client portal integration.",
    url: "#",
  },
  {
    id: 3,
    title: "Extreme Solutions Cleaning",
    image: "/lovable-uploads/extremesolnclean.png",
    description: "Commercial and residential cleaning services site with booking functionality.",
    url: "#",
  },
  {
    id: 4,
    title: "Advizall",
    image: "/lovable-uploads/advizall.png",
    description: "Digital marketing agency website with SEO optimization and lead generation.",
    url: "#",
  },
  {
    id: 5,
    title: "Extreme Solutions Inc",
    image: "/lovable-uploads/extremesolninc.png",
    description: "Corporate solutions provider featuring integrated customer management system.",
    url: "#",
  },
  {
    id: 6,
    title: "RoboAutomation",
    image: "/lovable-uploads/roboautomation.png",
    description: "Cutting-edge automation technology company website with interactive demos.",
    url: "#",
  },
];

const Portfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageStatus, setImageStatus] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({});

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize all images as loading
    const initialStatus: Record<number, 'loading' | 'loaded' | 'error'> = {};
    portfolioItems.forEach(item => {
      initialStatus[item.id] = 'loading';
    });
    setImageStatus(initialStatus);
    
    // Preload images
    portfolioItems.forEach(item => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [item.id]: 'loaded' }));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${item.image}`);
        setImageStatus(prev => ({ ...prev, [item.id]: 'error' }));
      };
    });
  }, []);

  const handleImageError = (id: number) => {
    console.log(`Image ${id} failed to load, using fallback`);
    setImageStatus(prev => ({ ...prev, [id]: 'error' }));
  };

  return (
    <div className="min-h-screen bg-advizall-charcoal">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12 xl:px-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-30"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text blue-shadow">Our Portfolio</span>
              </h1>
              <p className="text-xl text-advizall-silver-text leading-relaxed">
                Explore our collection of premium websites we've designed and developed for various clients across different industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden group h-full bg-advizall-darkGray border-advizall-darkBlue-light/30 hover:border-advizall-vividBlue-light/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-advizall-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-10 backdrop-blur-sm">
                      <div className="text-center space-y-3">
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="text-advizall-silver-text">{item.description}</p>
                        <a 
                          href={item.url} 
                          className="inline-flex items-center bg-advizall-vividBlue-light/90 hover:bg-advizall-vividBlue-light px-4 py-2 rounded-md text-white transition-colors text-sm mt-2"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Visit Website <ExternalLink className="ml-1" size={14} />
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-0">
                      <AspectRatio ratio={16/9} className="overflow-hidden bg-advizall-darkGray">
                        {imageStatus[item.id] === 'loading' && (
                          <Skeleton className="w-full h-full absolute inset-0" />
                        )}
                        <picture>
                          <source type="image/png" srcSet={item.image} />
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onError={() => handleImageError(item.id)}
                            style={{ 
                              opacity: imageStatus[item.id] === 'loaded' ? 1 : 0,
                              transition: 'opacity 0.3s ease-in-out'
                            }}
                            onLoad={() => setImageStatus(prev => ({ ...prev, [item.id]: 'loaded' }))}
                          />
                          {imageStatus[item.id] === 'error' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-advizall-darkGray text-advizall-silver-text">
                              <p className="text-sm">{item.title}</p>
                            </div>
                          )}
                        </picture>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 md:px-12 xl:px-24 bg-gradient-to-r from-advizall-darkBlue-dark to-advizall-darkBlue-light/80">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-lg text-advizall-silver-text mb-10">
                Join our growing list of satisfied clients with a custom website tailored to your business needs.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
