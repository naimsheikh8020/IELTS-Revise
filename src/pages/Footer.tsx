import React from "react";

// --- Data for Links ---
const quickLinks = ["About Us", "Features", "Pricing", "Testimonials"];
const resources = ["Practice Tests", "Study Tips", "IELTS Guide", "Blog"];
const legal = ["Privacy Policy", "Terms of Service", "Contact", "Support"];

// --- Social Icon SVG Components ---
const FacebookIcon = () => (
 <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763239529/Link_s5pax7.png" alt="" /> 
);
const TwitterIcon = () => (
<img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763239529/Link_1_sezrnb.png" alt="" />
);
const LinkedInIcon = () => (
 <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763239529/Link_3_ryxhn2.png" alt="" />
);
const InstagramIcon = () => (
 <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763239529/Link_2_fytaui.png" alt="" />
);

// --- 3. Footer Component (Main component) ---
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-6 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Column 1: Logo and Description */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-10">
            <div className="flex items-center text-xl font-bold text-gray-900">
              {/* Simple Logo Placeholder (matching image) */}
              
             <img className="w-40" src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1763239704/46a166c4-cf51-4782-acaf-58f20aca5fae_3_xm30pg.png" alt="" />
            </div>
            <p className="text-sm">
              Master your IELTS exam with cutting-edge AI technology and
              personalized feedback.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          {/* Stay Updated Section */}
          <div className="text-center mb-6">
            <h4 className="font-bold text-gray-900 mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Stay updated with the latest IELTS practice tests and tips.
            </p>

            <div className="flex justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                aria-label="Enter your email"
              />
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-4 mt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2025 IELTS Revise. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
