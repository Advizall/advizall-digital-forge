
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CtaSection from '@/components/home/CtaSection';

const About: React.FC = () => {
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

  const services = [
    "Strategic content across all social platforms",
    "AI-powered automations to convert faster",
    "Smart data scraping for email & SMS campaigns",
    "SEO that ranks — and converts",
    "Custom funnels designed to scale your business"
  ];

  return (
    <div className="min-h-screen bg-advizall-charcoal">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-20 px-6 overflow-hidden"
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
            {[...Array(15)].map((_, i) => (
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

          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">About</span> Advizall
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-advizall-silver-text mb-10"
              >
                We are a <span className="text-advizall-vividBlue-light">growth-driven</span> marketing agency built for <span className="text-advizall-vividBlue-light">performance</span>.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-advizall-white mb-12"
              >
                From content to code — Advizall handles it all.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-advizall-darkGray">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-advizall-white text-center"
              >
                We manage your entire <span className="gradient-text">digital presence</span>:
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-advizall-vividBlue-light mr-4 mt-1 flex-shrink-0" size={24} />
                      <p className="text-xl text-advizall-silver-text">{service}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute w-full h-full rounded-xl 
                                bg-gradient-to-r from-advizall-vividBlue-dark/40 to-advizall-vividBlue-light/40 
                                blur-3xl opacity-70 animate-pulse-glow z-0"
                    style={{
                      filter: 'blur(40px)',
                      transform: 'scale(1.2)',
                    }}></div>
                  <div className="relative z-10 rounded-xl overflow-hidden border border-advizall-silver-dark/30">
                    <AspectRatio ratio={16/9}>
                      <img
                        src="/lovable-uploads/paccsolutions.png"
                        alt="Digital Marketing Dashboard"
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-6 bg-dark-blue-gradient">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-advizall-white"
              >
                We don't follow trends.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl text-advizall-silver-text mb-12"
              >
                We create <span className="text-advizall-vividBlue-light font-bold">systems</span> that drive <span className="text-advizall-vividBlue-light font-bold">results</span>.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <Button
                  asChild
                  className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-md shadow-md hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/contact">
                    Start Growing Your Business <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-16 text-advizall-white text-center"
              >
                <span className="gradient-text">Our Approach</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    title: 'Data-Driven', 
                    description: 'We base every decision on data and analytics to maximize return on investment.',
                    icon: '📊'
                  },
                  { 
                    title: 'Cutting-Edge', 
                    description: 'We leverage the latest AI and automation technologies to stay ahead of the competition.',
                    icon: '🤖'
                  },
                  { 
                    title: 'Results Focused', 
                    description: 'Our strategies are designed to deliver measurable growth and conversions.',
                    icon: '📈'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="bg-advizall-darkGray/30 border border-advizall-silver-dark/20 rounded-xl p-8 shadow-md hover:shadow-glow transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-advizall-white mb-3">{item.title}</h3>
                    <p className="text-advizall-silver-text">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
