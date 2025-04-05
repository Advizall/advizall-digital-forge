
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-advizall-charcoal">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-advizall-white">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-advizall-silver-text max-w-2xl mx-auto">
              Ready to transform your digital marketing strategy? Contact us today for a free consultation and audit of your current campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-advizall-darkGray/30 border border-advizall-silver-dark/20 rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-advizall-white">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-advizall-darkGray/30 border border-advizall-silver-dark/20 rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-advizall-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-advizall-vividBlue-light mr-4 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-lg font-medium text-advizall-white">Office Location</h3>
                      <p className="text-advizall-silver-text mt-1">
                        123 Digital Avenue<br />
                        Chicago, IL 60007
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-advizall-vividBlue-light mr-4 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-lg font-medium text-advizall-white">Phone</h3>
                      <p className="text-advizall-silver-text mt-1">(312) 555-6789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-advizall-vividBlue-light mr-4 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-lg font-medium text-advizall-white">Email</h3>
                      <p className="text-advizall-silver-text mt-1">info@advizall.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-advizall-vividBlue-light mr-4 mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h3 className="text-lg font-medium text-advizall-white">Business Hours</h3>
                      <p className="text-advizall-silver-text mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-advizall-darkGray/30 border border-advizall-silver-dark/20 rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-advizall-white">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="bg-advizall-silver-dark/30 hover:bg-advizall-vividBlue-dark text-advizall-silver-text hover:text-white p-3 rounded-full transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-advizall-silver-dark/30 hover:bg-advizall-vividBlue-dark text-advizall-silver-text hover:text-white p-3 rounded-full transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-advizall-silver-dark/30 hover:bg-advizall-vividBlue-dark text-advizall-silver-text hover:text-white p-3 rounded-full transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-advizall-silver-dark/30 hover:bg-advizall-vividBlue-dark text-advizall-silver-text hover:text-white p-3 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
