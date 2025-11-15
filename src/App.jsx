import React from 'react'
import Header from './components/Header';
import Home from "./pages/Home"
import Features from "./pages/Features"
import Reviews from "./pages/Reviews"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"
import Trusted from './section/Trusted';
import PricingPage from './pages/PricingCard';
import FrequentlyAskedQuestions from './pages/FrequentlyAskedQuestions';

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
         <section id="pricing" name="pricing">
          <PricingPage />
        </section>
         <section id="FrequentlyAskedQuestions" name="FrequentlyAskedQuestions">
          <FrequentlyAskedQuestions />
        </section>
      </main>
      
    </div>
  );

}

export default App