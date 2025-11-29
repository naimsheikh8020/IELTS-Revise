import React, { useState } from "react";
import assets from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkRouter, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuthStore from "../store/authStore";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn, logout } = useAuthStore();

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Features", to: "features" },
    { label: "Reviews", to: "reviews" },
    { label: "Pricing", to: "pricing" },
  ];

  const handleNavigateToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <LinkRouter to={isLoggedIn ? "/dashboard" : "/"}>
          <img
            src={assets.footer_logo}
            alt="logo"
            className="w-1/5 cursor-pointer"
          />
        </LinkRouter>

        {/* Desktop Navigation (lg only) */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {!isLoggedIn ? (
            <>
              {navItems.map(({ label, to }) =>
                isHomePage ? (
                  <ScrollLink
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
                  </ScrollLink>
                ) : (
                  <button
                    key={to}
                    onClick={() => handleNavigateToSection(to)}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    {label}
                  </button>
                )
              )}

              <LinkRouter
                to="/blog"
                className={`hover:text-blue-600 ${
                  location.pathname === "/blog"
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                Blog
              </LinkRouter>

              <LinkRouter
                to="/signin"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Get Started
              </LinkRouter>
            </>
          ) : (
            <>
              <LinkRouter
                to="/dashboard"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/dashboard"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Dashboard
              </LinkRouter>

              <LinkRouter
                to="/listing"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/listing"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Listing
              </LinkRouter>

              {/* ✅ FIXED: Reading added here */}
              <LinkRouter
                to="/reading"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/reading"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Reading
              </LinkRouter>

              <LinkRouter
                to="/writing"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/writing"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Writing
              </LinkRouter>

              <LinkRouter
                to="/speaking"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/speaking"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Speaking
              </LinkRouter>

              <LinkRouter
                to="/mock-test"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/mock-test"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Mock Test
              </LinkRouter>

              <LinkRouter
                to="/profile"
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/profile"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
              >
                Profile
              </LinkRouter>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Burger Menu */}
        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:bg-transparent md:bg-opacity-0"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-72 bg-white p-6 pt-20 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo */}
        <LinkRouter
          to={isLoggedIn ? "/dashboard" : "/"}
          onClick={() => setOpen(false)}
          className="absolute top-5 left-5"
        >
          <img
            src={assets.footer_logo}
            alt="logo"
            className="w-24 cursor-pointer"
          />
        </LinkRouter>

        <button
          className="absolute top-5 right-5"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="flex flex-col  gap-6 text-lg font-medium text-gray-700">
          {!isLoggedIn ? (
            <>
              {navItems.map(({ label, to }) => (
                <button
                  key={to}
                  onClick={() => {
                    setOpen(false);
                    handleNavigateToSection(to);
                  }}
                  className="text-left cursor-pointer hover:text-blue-600"
                >
                  {label}
                </button>
              ))}

              <LinkRouter
                to="/blog"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Blog
              </LinkRouter>

              <LinkRouter
                to="/signin"
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Get Started
              </LinkRouter>
            </>
          ) : (
            <>
              <LinkRouter
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Dashboard
              </LinkRouter>

              <LinkRouter
                to="/listing"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Listing
              </LinkRouter>

              {/* Mobile already had Reading */}
              <LinkRouter
                to="/reading"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Reading
              </LinkRouter>

              <LinkRouter
                to="/writing"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Writing
              </LinkRouter>

              <LinkRouter
                to="/speaking"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Speaking
              </LinkRouter>

              <LinkRouter
                to="/mock-test"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Mock Test
              </LinkRouter>

              <LinkRouter
                to="/profile"
                onClick={() => setOpen(false)}
                className="hover:text-blue-600"
              >
                Profile
              </LinkRouter>

              <button
                onClick={() => {
                  logout();
                  navigate("/");
                  setOpen(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
