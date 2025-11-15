// import React from 'react'
// import Header from './components/Header';
// import Home from "./pages/Home"
// import Features from "./pages/Features"
// import Reviews from "./pages/Reviews"
// import Pricing from "./pages/Pricing"
// import Blog from "./pages/Blog"
// import Trusted from './section/Trusted';
// import Section from './pages/Section';

// const App = () => {
//   return (
//     <div className='bg-white'>
//       <Header />
//       <main className="mt-5 md:px-12 sm:px-0">
//         <section id="home" name="home">
//           <Home />
//         </section>

//         <section id="section" name="section">
//           <Section />
//         </section>

//         <section id="features" name="features">
//           <Features />
//         </section>

//         <section id="reviews" name="reviews">
//           <Reviews />
//         </section>

//         <section id="pricing" name="pricing">
//           <Pricing />
//         </section>

//         <section id="blog" name="blog">
//           <Blog />
//         </section>
//       </main>
      
//     </div>
//   );

// }

// export default App


import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Reviews from "./pages/Reviews";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Trusted from "./section/Trusted";
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestions";
import ReadyToAchieve from "./pages/ReadyToAchieve";
import Footer from "./pages/Footer";
 
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
        
        <section id="FrequentlyAskedQuestions" name="FrequentlyAskedQuestions">
          <FrequentlyAskedQuestions />
        </section>
        <section id="ReadyToAchieve" name="ReadyToAchieve">
          <ReadyToAchieve />
        </section>
        <section id="footer" name="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
};
 
export default App;
 
 