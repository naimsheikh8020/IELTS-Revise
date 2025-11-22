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
        {/* ✅ Responsive Logo with login state */}
        <LinkRouter to={isLoggedIn ? "/dashboard" : "/"}>
          <img
            src={assets.footer_logo}
            alt="logo"
            className="w-1/5 cursor-pointer"
          />
        </LinkRouter>

        {/* 🌐 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {!isLoggedIn ? (
            <>
              {navItems.map(({ label, to }) =>
                label === "Home" ? (
                  isHomePage ? (
                    <ScrollLink
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
                    </ScrollLink>
                  ) : (
                    <button
                      key={to}
                      onClick={() => handleNavigateToSection("home")}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      Home
                    </button>
                  )
                ) : isHomePage ? (
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

              {/* Blog */}
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

              {/* Get Started */}
              <LinkRouter
                to="/signin"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Get Started
              </LinkRouter>
            </>
          ) : (
            <>
              {/* 🔐 Logged In Menu */}
              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/dashboard"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/dashboard"
              >
                Dashboard
              </LinkRouter>

              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/listing"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/listing"
              >
                Listing
              </LinkRouter>

              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/writing"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/writing"
              >
                Writing
              </LinkRouter>

              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/speaking"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/speaking"
              >
                Speaking
              </LinkRouter>

              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/mock-test"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/mock-test"
              >
                Mock Test
              </LinkRouter>

              <LinkRouter
                className={`cursor-pointer hover:text-blue-600 ${
                  location.pathname === "/profile"
                    ? "text-blue-600 font-bold"
                    : ""
                }`}
                to="/profile"
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

        {/* 📱 Mobile Burger Icon */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* 📱 Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 📱 Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-6 pt-20 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 🔥 Mobile Logo with login logic */}
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

        {/* Close Button */}
        <button
          className="absolute top-5 right-5"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">
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
