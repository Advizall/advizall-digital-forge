
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: 'Meta Advertising',
    description: 'Strategic campaigns across Facebook & Instagram that drive engagement, leads, and sales.',
    icon: '📱',
    features: ['Advanced targeting', 'Creative optimization', 'Conversion tracking', 'Retargeting strategies']
  },
  {
    id: 2,
    title: 'Google Ads',
    description: 'Precision PPC campaigns that put your business in front of high-intent searchers.',
    icon: '🔍',
    features: ['Keyword research', 'Ad copy optimization', 'Landing page analysis', 'Quality score improvement']
  },
  {
    id: 3,
    title: 'Local Services',
    description: 'Dominate local search results and drive highly qualified leads in your service area.',
    icon: '📍',
    features: ['Google Local Services', 'Local SEO', 'Maps optimization', 'Review management']
  },
  {
    id: 4,
    title: 'Premium Networks',
    description: 'Strategic presence on high-converting platforms like Nextdoor, Yelp, Angi, and more.',
    icon: '🌐',
    features: ['Profile optimization', 'Review generation', 'Competitive analysis', 'Lead response systems']
  },
  {
    id: 5,
    title: 'Organic Growth',
    description: 'Sustainable, long-term strategies to build authority and generate organic traffic.',
    icon: '📈',
    features: ['SEO strategies', 'Content marketing', 'Social media growth', 'Analytics & reporting']
  },
  {
    id: 6,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making with comprehensive reporting and actionable insights.',
    icon: '📊',
    features: ['Performance tracking', 'Conversion analysis', 'ROI reporting', 'Strategy refinement']
  }
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative bg-charcoal-gradient">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-advizall-silver-text text-lg">
            Comprehensive digital marketing solutions designed to maximize your reach and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`bg-advizall-darkGray bg-opacity-50 border border-advizall-silver-dark/20 hover:border-advizall-vividBlue-light/40 transition-all duration-300 ${
                hoveredCard === service.id ? 'shadow-glow' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-advizall-white">{service.title}</CardTitle>
                <CardDescription className="text-advizall-silver-text mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-advizall-vividBlue-light mr-2">•</span>
                      <span className="text-advizall-silver-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
          >
            <Link to="/services">
              Explore All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
