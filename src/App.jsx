import React from 'react'
import Header from './components/Header';
import Home from "./pages/Home"
import Features from "./pages/Features"
import Reviews from "./pages/Reviews"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"

const App = () => {
  return (
    <div>
      <Header />
      <main className="mt-5 md:px-12 sm:px-0">
        <section id="home" name="home">
          <Home />
        </section>

        <section id="features" name="features">
          <Features />
        </section>

        <section id="reviews" name="reviews">
          <Reviews />
        </section>

        <section id="pricing" name="pricing">
          <Pricing />
        </section>

        <section id="blog" name="blog">
          <Blog />
        </section>
      </main>
    </div>
  );

}

export default App