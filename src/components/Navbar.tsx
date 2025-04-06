
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-advizall-charcoal/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <img
            src="/lovable-uploads/039859B6-5911-4D55-993B-6E74B1D840DF.png"
            alt="Advizall Logo"
            className="h-10 md:h-12"
          />
          <span className="ml-2 text-xl font-bold text-advizall-white">Advizall</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors animated-underline py-1"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors animated-underline py-1"
          >
            Services
          </NavLink>
          <NavLink
            to="/case-studies"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors animated-underline py-1"
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors animated-underline py-1"
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors animated-underline py-1"
          >
            Portfolio
          </NavLink>
          <Button
            asChild
            className="bg-blue-gradient hover:opacity-90 text-white font-medium px-6 py-2 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
          >
            <NavLink to="/contact">Free Audit</NavLink>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-advizall-silver-text hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-advizall-darkGray/95 backdrop-blur-lg absolute w-full transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          <NavLink
            to="/"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors py-2 border-b border-advizall-silver-dark/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors py-2 border-b border-advizall-silver-dark/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/case-studies"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors py-2 border-b border-advizall-silver-dark/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/about"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors py-2 border-b border-advizall-silver-dark/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-advizall-silver-text hover:text-advizall-white transition-colors py-2 border-b border-advizall-silver-dark/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <Button
            asChild
            className="bg-blue-gradient hover:opacity-90 text-white font-medium w-full mt-2 py-3 rounded-md shadow-md transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <NavLink to="/contact">Get Free Audit</NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
