
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/home/CtaSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'meta',
    title: 'Meta Advertising',
    icon: '📱',
    description: 'Strategic campaigns across Facebook & Instagram that drive engagement, leads, and sales.',
    features: [
      'Advanced audience targeting based on demographics, interests, and behaviors',
      'Dynamic creative optimization for maximum ad performance',
      'Comprehensive conversion tracking and attribution',
      'Strategic retargeting to re-engage potential customers',
      'Cross-platform integration between Facebook, Instagram, and Messenger',
      'Regular performance analysis and strategy refinement'
    ]
  },
  {
    id: 'google',
    title: 'Google Ads',
    icon: '🔍',
    description: 'Precision PPC campaigns that put your business in front of high-intent searchers.',
    features: [
      'In-depth keyword research and competitive analysis',
      'Strategic bid management and budget optimization',
      'Compelling ad copy development and A/B testing',
      'Landing page optimization for conversion rate improvement',
      'Quality score enhancement strategies',
      'Display network and YouTube advertising integration',
      'Google Shopping campaign management for e-commerce'
    ]
  },
  {
    id: 'local',
    title: 'Local Services',
    icon: '📍',
    description: 'Dominate local search results and drive highly qualified leads in your service area.',
    features: [
      'Google Local Services Ads setup and management',
      'Google Business Profile optimization and management',
      'Local SEO strategy implementation',
      'Maps optimization for improved visibility',
      'Review generation and management systems',
      'Local citation building and cleanup',
      'Geo-targeted advertising campaigns'
    ]
  },
  {
    id: 'premium',
    title: 'Premium Networks',
    icon: '🌐',
    description: 'Strategic presence on high-converting platforms like Nextdoor, Yelp, Angi, and more.',
    features: [
      'Profile optimization across all relevant platforms',
      'Sponsored placement management on premium platforms',
      'Review generation and response strategies',
      'Competitive analysis and positioning',
      'Lead response systems implementation',
      'Cross-platform messaging consistency',
      'Performance tracking and ROI analysis'
    ]
  },
  {
    id: 'organic',
    title: 'Organic Growth',
    description: 'Sustainable, long-term strategies to build authority and generate organic traffic.',
    icon: '📈',
    features: [
      'Comprehensive SEO strategy development',
      'Technical SEO audits and implementation',
      'Content marketing strategy and execution',
      'Social media organic growth planning',
      'Link building and digital PR',
      'Schema markup implementation',
      'Content gap analysis and keyword mapping'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Data-driven decision making with comprehensive reporting and actionable insights.',
    icon: '📊',
    features: [
      'Custom dashboard creation for real-time performance tracking',
      'Conversion tracking setup and monitoring',
      'Multi-touch attribution modeling',
      'Regular performance reporting with actionable insights',
      'Competitive benchmarking and analysis',
      'ROI and ROAS calculation and reporting',
      'Strategic recommendations based on data analysis'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-advizall-charcoal">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-advizall-white">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl text-advizall-silver-text max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to maximize your reach and drive measurable results for your business.
            </p>
          </div>
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-advizall-white">{service.title}</h2>
                  <p className="text-xl text-advizall-silver-text mb-8">{service.description}</p>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight size={18} className="text-advizall-vividBlue-light mr-3 mt-1 flex-shrink-0" />
                        <span className="text-advizall-silver-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="bg-advizall-darkGray bg-opacity-50 border border-advizall-silver-dark/20 hover:border-advizall-vividBlue-light/40 shadow-lg hover:shadow-glow transition-all duration-500 h-full overflow-hidden relative group">
                    <div className="absolute inset-0 bg-blue-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-advizall-white">{service.title}</CardTitle>
                      <CardDescription className="text-advizall-silver-text">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 text-6xl">{service.icon}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
