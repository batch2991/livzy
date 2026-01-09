import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_0efccfdf-9de8-43a3-a55b-5bcb422c48af/artifacts/5slt9gy9_logo3.png" 
              alt="livzyinteriors" 
              className="h-24 w-auto"
            />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a href="tel:9989428968" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span className="font-medium">9989428968 / 9059304493</span>
            </a>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-md transition-all duration-300">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="tel:9989428968" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">9989428968 / 9059304493</span>
            </a>
            <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;