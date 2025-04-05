
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  company: string;
  image: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Elite Home Services",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Advizall transformed our digital presence. Our Google Ads and Local Services campaigns are generating 3x more qualified leads than our previous agency. Their team is responsive, strategic, and truly cares about our success.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Innovative Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The team at Advizall helped us navigate the complexities of Meta advertising with impressive results. Their data-driven approach and creative strategies have significantly improved our ROI and brand awareness.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Williams",
    company: "Urban Style Boutique",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Working with Advizall has been a game-changer for our boutique. Their expertise in both paid and organic strategies has helped us reach new customers and build a loyal following. I highly recommend their services!",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Premium Construction",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "As a construction company, we needed to generate high-quality local leads. Advizall's approach to Google Local Services and premium platforms like Angi has transformed our business. We're booking more jobs than ever.",
    rating: 4
  },
  {
    id: 5,
    name: "Lisa Chen",
    company: "Wellness Center Chicago",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "The personalized attention from Advizall makes them stand out. They truly understand our wellness industry and have crafted campaigns that resonate with our target audience. Our booking calendar is now consistently full.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-padding relative bg-charcoal-gradient">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-advizall-silver-text text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Advizall.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-advizall-darkGray bg-opacity-50 border border-advizall-silver-dark/20 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-advizall-vividBlue-light"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                fill={i < testimonial.rating ? "#00C6FB" : "transparent"} 
                                stroke={i < testimonial.rating ? "#00C6FB" : "#4B4B4B"} 
                                className="mr-1"
                              />
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold text-advizall-white">{testimonial.name}</h3>
                          <p className="text-advizall-vividBlue-light text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-advizall-silver-text italic">"{testimonial.text}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-advizall-darkGray/70 text-advizall-white rounded-full p-2 hover:bg-advizall-vividBlue-dark hover:text-advizall-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-advizall-darkGray/70 text-advizall-white rounded-full p-2 hover:bg-advizall-vividBlue-dark hover:text-advizall-white"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-advizall-vividBlue-light w-6'
                    : 'bg-advizall-silver-dark/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
