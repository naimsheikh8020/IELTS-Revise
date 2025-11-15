import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Section", to: "section" },
    { label: "Features", to: "features" },
    { label: "Reviews", to: "reviews" },
    { label: "Pricing", to: "pricing" },
    { label: "Blog", to: "blog" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <img src={assets.navbarlog} alt="logo" className="h-10" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700 whitespace-nowrap">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={400}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(to)}
              className={`cursor-pointer hover:text-blue-600 ${
                active === to ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-xl">
            Get Started
          </button>
        </nav>

        {/* Mobile Icon */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 "
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white  shadow-xl p-6 pt-20
          transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="absolute top-5 right-5" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={400}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(to)}
              onClick={() => setOpen(false)}
              className={`cursor-pointer ${active === to ? "text-blue-600 font-semibold" : ""}`}
            >
              {label}
            </Link>
          ))}

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-xl mt-4">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
