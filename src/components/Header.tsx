import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Features", to: "features" },
    { label: "Reviews", to: "reviews" },
    { label: "Pricing", to: "pricing" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <LinkRouter to='/'><img src={assets.navbarlog} alt="logo" className="h-10" /></LinkRouter>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700 whitespace-nowrap">

          {navItems.map(({ label, to }) => (
            label === "Home" ? (
              // HOME BUTTON (special behavior)
              isHomePage ? (
                <Link
                  key={to}
                  to="home"
                  smooth
                  duration={400}
                  offset={-80}
                  spy={true}
                  onSetActive={() => setActive("home")}
                  className={`cursor-pointer hover:text-blue-600 ${
                    active === "home" ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              ) : (
                <LinkRouter
                  key={to}
                  to="/"
                  className="cursor-pointer hover:text-blue-600"
                >
                  Home
                </LinkRouter>
              )
            ) : (
              // OTHER NAV ITEMS
              isHomePage ? (
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
              ) : (
                <LinkRouter
                  key={to}
                  to="/"
                  className="cursor-pointer hover:text-blue-600"
                >
                  {label}
                </LinkRouter>
              )
            )
          ))}

          {/* Blog Button using React Router */}
          <LinkRouter to="/blog" className="hover:text-blue-600">
            Blog
          </LinkRouter>

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
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 pt-20
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-5" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
          {navItems.map(({ label, to }) => (
            label === "Home" ? (
              isHomePage ? (
                <Link
                  key={to}
                  to="home"
                  smooth
                  duration={400}
                  offset={-80}
                  spy={true}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  Home
                </Link>
              ) : (
                <LinkRouter
                  key={to}
                  to="/"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  Home
                </LinkRouter>
              )
            ) : (
              isHomePage ? (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={400}
                  offset={-80}
                  spy={true}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  {label}
                </Link>
              ) : (
                <LinkRouter
                  key={to}
                  to="/"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >
                  {label}
                </LinkRouter>
              )
            )
          ))}

          <LinkRouter
            to="/blog"
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Blog
          </LinkRouter>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white font-semibold rounded-xl mt-4">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
