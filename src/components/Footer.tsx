
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-charcoal-gradient overflow-hidden">
      {/* Animated particles for background effect */}
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
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/039859B6-5911-4D55-993B-6E74B1D840DF.png"
                alt="Advizall Logo"
                className="h-12"
              />
              <span className="ml-2 text-xl font-bold text-advizall-white">Advizall</span>
            </div>
            <p className="text-advizall-silver-text text-sm">
              A leading digital marketing agency specializing in paid traffic, organic growth, and local lead generation. 
              Based in Chicago, IL.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-advizall-white font-semibold text-lg mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                Home
              </NavLink>
              <NavLink to="/services" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                Services
              </NavLink>
              <NavLink to="/case-studies" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                Case Studies
              </NavLink>
              <NavLink to="/about" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                About Us
              </NavLink>
              <NavLink to="/portfolio" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="text-advizall-silver-text hover:text-advizall-vividBlue-light transition-colors">
                Contact
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className="text-advizall-white font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-advizall-vividBlue-light mr-3 mt-1 flex-shrink-0" />
                <p className="text-advizall-silver-text text-sm">
                  123 Digital Avenue, Chicago, IL 60007
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-advizall-vividBlue-light mr-3 flex-shrink-0" />
                <p className="text-advizall-silver-text text-sm">(312) 555-6789</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-advizall-vividBlue-light mr-3 flex-shrink-0" />
                <p className="text-advizall-silver-text text-sm">info@advizall.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-advizall-white font-semibold text-lg mb-6">Subscribe</h3>
            <p className="text-advizall-silver-text text-sm mb-4">
              Subscribe to our newsletter for the latest digital marketing insights and tips.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                placeholder="Your email" 
                className="bg-advizall-darkGray border border-advizall-silver-dark/30 text-advizall-silver-text placeholder:text-advizall-silver-dark focus:border-advizall-vividBlue-light"
              />
              <Button className="bg-blue-gradient hover:opacity-90 text-white font-medium shadow-md hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-advizall-silver-dark/20 mt-12 pt-8 text-center text-sm text-advizall-silver-text">
          <p>© {new Date().getFullYear()} Advizall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
