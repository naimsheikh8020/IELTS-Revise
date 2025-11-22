import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Reviews from "./pages/Reviews";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import ReadyToAchieve from "./pages/ReadyToAchieve";
import Footer from "./pages/Footer";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privicy_Policy from "./pages/Privicy_Policy";
import Terms_of_Service from "./pages/Terms_of_Service";
import BlogDetails from "./pages/BlogDetails";
import AllBlogs from "./pages/AllBlogs";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Listing from "./pages/Listing";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Mocktest from "./pages/Mocktest";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <main className="pt-20">
                <section id="home"><Home /></section>
                <section id="features"><Features /></section>
                <section id="reviews"><Reviews /></section>
                <section id="pricing"><Pricing /></section>
                <section id="FrequentlyAskedQuestions"><FrequentlyAskedQuestions /></section>
                <section id="ReadyToAchieve"><ReadyToAchieve /></section>
              </main>
            </>
          }
        />

        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blogs" element={<AllBlogs />} />

        {/* Auth */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privicy_Policy />} />
        <Route path="/terms" element={<Terms_of_Service />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/mock-test" element={<Mocktest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
