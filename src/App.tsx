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
import SignIn from "./pages/SignIn"; // Import the SignIn component
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privicy_Policy from "./pages/Privicy_Policy";
import Terms_of_Service from "./pages/Terms_of_Service";

const App = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      <Routes>
        {/* Landing Page (full scrollable sections) */}
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
                {/* <section id="footer"><Footer /></section> */}
              </main>
            </>
          }
        />

        {/* Separate Blog Page */}
        <Route path="/blog" element={<Blog />} />
        
        {/* Sign In/Sign Up Page */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy" element={<Privicy_Policy/>}/>
        <Route path="/terms" element={<Terms_of_Service/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;