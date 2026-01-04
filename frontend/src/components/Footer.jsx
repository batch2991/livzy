import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_0efccfdf-9de8-43a3-a55b-5bcb422c48af/artifacts/8kbuqaum_logo1.png" 
              alt="livzyinteriors" 
              className="h-32 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your space with India's trusted interior design partner. We bring innovation, quality, and style to every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:9989428968" className="hover:text-orange-500 transition-colors duration-300 block">
                    +91 9989428968
                  </a>
                  <a href="tel:9059304493" className="hover:text-orange-500 transition-colors duration-300 block">
                    +91 9059304493
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:livzyinteriors@gmail.com" className="hover:text-orange-500 transition-colors duration-300">
                  livzyinteriors@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} livzyinteriors. All rights reserved. | Designed with passion for beautiful interiors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;