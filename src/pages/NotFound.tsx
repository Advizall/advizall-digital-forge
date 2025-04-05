
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-advizall-charcoal flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-xl">
          <h1 className="text-8xl font-bold mb-8 gradient-text">404</h1>
          <h2 className="text-3xl font-semibold mb-6 text-advizall-white">Page Not Found</h2>
          <p className="text-xl text-advizall-silver-text mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            asChild
            className="bg-blue-gradient hover:opacity-90 text-white font-semibold px-8 py-6 rounded-md shadow-md hover:shadow-glow transition-all duration-300"
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
