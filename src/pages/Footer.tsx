// components/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import assets from '../assets/assets'

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img  src={assets.footer_logo} className='mb-2 w-3/4 '/>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted partner for IELTS exam preparation with expert-created practice exam questions.
            </p>
            <div className="text-gray-600 text-sm space-y-1">
              <p>71-75 Shelton Street</p>
              <p>Covent Garden</p>
              <p>London WC2H 9JQ</p>
              <p>United Kingdom</p>
            </div>
          </div>

          {/* IELTS Sections */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">IELTS Sections</h4>
            <ul className="space-y-2 ">
              <li>
                <button 
                  onClick={() => scrollToSection('ielts-practice')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Listening
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ielts-practice')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Reading
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ielts-practice')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Writing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ielts-practice')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Speaking
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('FrequentlyAskedQuestions')}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © 2025 IELTS Revision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;