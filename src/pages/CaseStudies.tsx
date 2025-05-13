
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChartBar, Users, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  industry: string;
  results: {
    icon: React.ReactNode;
    metric: string;
    value: string;
  }[];
  services: string[];
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Revolutionizing Online Cabinet Sales",
    client: "Miles Cabinet Refacing",
    description: "How we helped a local cabinet business increase online conversions by 217% through strategic digital marketing and a website redesign.",
    image: "/lovable-uploads/milesrefacing.png",
    industry: "Home Improvement",
    results: [
      { icon: <TrendingUp size={18} />, metric: "Conversion Rate", value: "+217%" },
      { icon: <Users size={18} />, metric: "Monthly Visitors", value: "15,000+" },
      { icon: <ChartBar size={18} />, metric: "ROI", value: "347%" }
    ],
    services: ["Web Design", "SEO", "Content Strategy", "PPC"],
    featured: true
  },
  {
    id: 2,
    title: "Scaling Business Solutions Through Digital",
    client: "PACC Solutions LLC",
    description: "Implementing a comprehensive digital strategy that increased client acquisition by 85% and streamlined operations.",
    image: "/lovable-uploads/paccsolutions.png",
    industry: "Business Services",
    results: [
      { icon: <TrendingUp size={18} />, metric: "Lead Generation", value: "+85%" },
      { icon: <Users size={18} />, metric: "Client Retention", value: "96%" },
      { icon: <Award size={18} />, metric: "Client Satisfaction", value: "4.9/5" }
    ],
    services: ["Digital Strategy", "Client Portal Development", "CRM Integration"],
    featured: true
  },
  {
    id: 3,
    title: "Dominating Local Search in the Cleaning Industry",
    client: "Extreme Solutions Cleaning",
    description: "A strategic local SEO campaign that positioned Extreme Solutions as the #1 cleaning service in their area.",
    image: "/lovable-uploads/extremesolnclean.png",
    industry: "Cleaning Services",
    results: [
      { icon: <TrendingUp size={18} />, metric: "Local Rankings", value: "#1 in 15 Keywords" },
      { icon: <ChartBar size={18} />, metric: "Lead Increase", value: "+124%" },
      { icon: <Users size={18} />, metric: "Service Bookings", value: "+68%" }
    ],
    services: ["Local SEO", "Google Business Profile", "Website Optimization"],
    featured: false
  },
  {
    id: 4,
    title: "Building an Industry-Leading Digital Presence",
    client: "RoboAutomation",
    description: "Creating a cutting-edge digital presence that established RoboAutomation as an industry thought leader.",
    image: "/lovable-uploads/roboautomation.png",
    industry: "Technology",
    results: [
      { icon: <Users size={18} />, metric: "Audience Growth", value: "+310%" },
      { icon: <TrendingUp size={18} />, metric: "Website Traffic", value: "+175%" },
      { icon: <Award size={18} />, metric: "Industry Awards", value: "3 Won" }
    ],
    services: ["Branding", "Content Marketing", "Social Media", "SEO"],
    featured: false
  }
];

const CaseStudies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageStatus, setImageStatus] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({});
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Industry filters based on case studies
  const industries = ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  // Filter case studies based on selection
  const filteredCaseStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  // Featured case studies
  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize all images as loading
    const initialStatus: Record<number, 'loading' | 'loaded' | 'error'> = {};
    caseStudies.forEach(item => {
      initialStatus[item.id] = 'loading';
    });
    setImageStatus(initialStatus);
    
    // Preload images
    caseStudies.forEach(study => {
      const img = new Image();
      img.src = study.image;
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [study.id]: 'loaded' }));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${study.image}`);
        setImageStatus(prev => ({ ...prev, [study.id]: 'error' }));
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
                <span className="gradient-text blue-shadow">Case Studies</span>
              </h1>
              <p className="text-xl text-advizall-silver-text leading-relaxed">
                Discover how we've transformed businesses through strategic digital marketing and innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-16 px-6 md:px-12 xl:px-24 relative bg-advizall-darkGray/50">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-3">Featured Success Stories</h2>
                  <p className="text-advizall-silver-text max-w-2xl">
                    Transformative digital strategies that delivered exceptional results for our clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-advizall-darkGray border-advizall-darkBlue-light/30 hover:border-advizall-vividBlue-light/50 transition-all duration-300 h-full overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="relative">
                          <AspectRatio ratio={1/1} className="h-full">
                            {imageStatus[study.id] === 'loading' && (
                              <Skeleton className="w-full h-full absolute inset-0" />
                            )}
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(study.id)}
                              style={{ 
                                opacity: imageStatus[study.id] === 'loaded' ? 1 : 0,
                                transition: 'opacity 0.3s ease-in-out'
                              }}
                              onLoad={() => setImageStatus(prev => ({ ...prev, [study.id]: 'loaded' }))}
                            />
                            {imageStatus[study.id] === 'error' && (
                              <div className="absolute inset-0 flex items-center justify-center bg-advizall-darkGray text-advizall-silver-text p-4">
                                <p className="text-center">{study.client}</p>
                              </div>
                            )}
                          </AspectRatio>
                          <Badge className="absolute top-4 right-4 bg-blue-gradient">{study.industry}</Badge>
                        </div>
                        <div className="flex flex-col p-6 justify-between">
                          <div>
                            <p className="text-advizall-vividBlue-light mb-2">{study.client}</p>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{study.title}</h3>
                            <p className="text-advizall-silver-text mb-4">{study.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {study.services.map((service, i) => (
                                <Badge key={i} variant="outline" className="bg-muted text-advizall-silver-text">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {study.results.map((result, i) => (
                                <div key={i} className="text-center p-2">
                                  <div className="flex justify-center text-advizall-vividBlue-light mb-1">
                                    {result.icon}
                                  </div>
                                  <p className="text-xs text-advizall-silver-text/80">{result.metric}</p>
                                  <p className="text-white font-semibold">{result.value}</p>
                                </div>
                              ))}
                            </div>
                            <Button variant="ghost" className="w-full text-advizall-vividBlue-light hover:text-advizall-white hover:bg-advizall-vividBlue-dark/20">
                              Read Full Case Study <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-16 px-6 md:px-12 xl:px-24">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">All Case Studies</h2>
                <p className="text-advizall-silver-text max-w-2xl">
                  Browse our collection of success stories across various industries.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Button
                      key={industry}
                      variant={selectedFilter === industry ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(industry)}
                      className={selectedFilter === industry ? "bg-blue-gradient" : ""}
                    >
                      {industry}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-advizall-darkGray border-advizall-darkBlue-light/30 hover:border-advizall-vividBlue-light/50 transition-all duration-300 h-full overflow-hidden">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        {imageStatus[study.id] === 'loading' && (
                          <Skeleton className="w-full h-full absolute inset-0" />
                        )}
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(study.id)}
                          style={{ 
                            opacity: imageStatus[study.id] === 'loaded' ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                          onLoad={() => setImageStatus(prev => ({ ...prev, [study.id]: 'loaded' }))}
                        />
                        {imageStatus[study.id] === 'error' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-advizall-darkGray text-advizall-silver-text p-4">
                            <p className="text-center">{study.client}</p>
                          </div>
                        )}
                      </AspectRatio>
                      <Badge className="absolute top-4 right-4 bg-blue-gradient">{study.industry}</Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <p className="text-advizall-vividBlue-light mb-1">{study.client}</p>
                      <CardTitle className="text-xl text-white">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-advizall-silver-text mb-4">
                        {study.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.services.slice(0, 3).map((service, i) => (
                          <Badge key={i} variant="outline" className="bg-muted text-advizall-silver-text">
                            {service}
                          </Badge>
                        ))}
                        {study.services.length > 3 && (
                          <Badge variant="outline" className="bg-muted text-advizall-silver-text">
                            +{study.services.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center p-2">
                            <div className="flex justify-center text-advizall-vividBlue-light mb-1">
                              {result.icon}
                            </div>
                            <p className="text-xs text-advizall-silver-text/80">{result.metric}</p>
                            <p className="text-white font-semibold">{result.value}</p>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full text-advizall-vividBlue-light hover:text-advizall-white hover:bg-advizall-vividBlue-dark/20">
                        View Details <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 xl:px-24 bg-gradient-to-r from-advizall-darkBlue-dark to-advizall-darkBlue-light/80">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-lg text-advizall-silver-text mb-10">
                Partner with Advizall and transform your digital presence into a growth engine for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 rounded-md shadow-md hover:shadow-glow transition-all duration-300">
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
