
import { Link, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-white border-t  mt-10 border-gray-100 p-6">
      <div className="">

     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        
          <div>
            <img
              src={assets.footer_logo}
              alt="IELTS Revise"
              className="w-40 mb-4"
            />
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Master your IELTS exam with cutting-edge AI technology and
              personalized feedback.
            </p>

         
            <div className="flex items-center gap-3">
              <a className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaFacebookF size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaTwitter size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaInstagram size={14} />
              </a>
              <a className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

  
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/practice-tests" className="text-gray-600 hover:text-blue-600">
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link to="/study-tips" className="text-gray-600 hover:text-blue-600">
                  Study Tips
                </Link>
              </li>
              <li>
                <Link to="/ielts-guide" className="text-gray-600 hover:text-blue-600">
                  IELTS Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

    
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-blue-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="mt-14 text-center">
          <h4 className="font-semibold text-gray-900 mb-2">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-600 mb-5">
            Stay updated with the latest IELTS practice tests and tips.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        
        <div className="mt-14 pt-6 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500">
            © 2025 IELTS Revise. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
