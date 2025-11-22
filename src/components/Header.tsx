import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-scroll";
import { Link as LinkRouter, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuthStore from "../store/authStore";

const Header = () => {
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

  const handleNavigateToSection = (sectionId) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <LinkRouter to="/">
          <img src={assets.footer_logo} alt="logo" className="w-1/5" />
        </LinkRouter>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          {!isLoggedIn ? (
            <>
              {/* Public Navbar */}
              {navItems.map(({ label, to }) =>
                label === "Home" ? (
                  isHomePage ? (
                    <Link
                      key={to}
                      to="home"
                      smooth
                      duration={400}
                      offset={-80}
                      spy={true}
                      onSetActive={() => setActive("home")}
                      className={`cursor-pointer ${
                        active === "home" ? "text-blue-600 font-bold" : ""
                      }`}
                    >
                      Home
                    </Link>
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
                  <Link
                    key={to}
                    to={to}
                    smooth
                    duration={400}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActive(to)}
                    className={`cursor-pointer hover:text-blue-600 ${
                      active === to ? "text-blue-600 font-bold" : ""
                    }`}
                  >
                    {label}
                  </Link>
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

              <LinkRouter to="/blog">Blog</LinkRouter>

              <LinkRouter
                to="/signin"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Get Started
              </LinkRouter>
            </>
          ) : (
            <>
              {/* Logged-in Navbar */}
              <LinkRouter to="/dashboard">Dashboard</LinkRouter>
              <LinkRouter to="/listing">Listing</LinkRouter>
              <LinkRouter to="/writing">Writing</LinkRouter>
              <LinkRouter to="/speaking">Speaking</LinkRouter>
              <LinkRouter to="/mock-test">Mock Test</LinkRouter>
              <LinkRouter to="/profile">Profile</LinkRouter>

              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-6 pt-20 transition-all ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-5" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 text-lg font-medium text-gray-700">

          {!isLoggedIn ? (
            <>
              {navItems.map(({ label, to }) =>
                <button
                  key={to}
                  onClick={() => {
                    setOpen(false);
                    handleNavigateToSection(to);
                  }}
                  className="cursor-pointer text-left"
                >
                  {label}
                </button>
              )}

              <LinkRouter to="/blog" onClick={() => setOpen(false)}>
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
              <LinkRouter to="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </LinkRouter>
              <LinkRouter to="/listing" onClick={() => setOpen(false)}>
                Listing
              </LinkRouter>
              <LinkRouter to="/writing" onClick={() => setOpen(false)}>
                Writing
              </LinkRouter>
              <LinkRouter to="/speaking" onClick={() => setOpen(false)}>
                Speaking
              </LinkRouter>
              <LinkRouter to="/mock-test" onClick={() => setOpen(false)}>
                Mock Test
              </LinkRouter>
              <LinkRouter to="/profile" onClick={() => setOpen(false)}>
                Profile
              </LinkRouter>

              <button
                onClick={() => {
                  logout();
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
