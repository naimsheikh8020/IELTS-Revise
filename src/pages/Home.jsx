import React from "react";
import { Check } from "lucide-react";
import Trusted from "../section/Trusted";
import Start_Practicing from "../section/Start_Practicing";

const Home = () => {
  return (
    <>
    <section className="px-4 sm:px-6 lg:px-8 min-h-[89vh] py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - 50% */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          {/* Top Achievement - width auto */}
          <div className="inline-flex items-center gap-2 bg-red-100 px-3 sm:px-4 py-2 text-red-600 rounded-full w-max">
            <div className="h-5 w-5 sm:h-6 sm:w-6 bg-red-300 rounded-full"></div>
            <p className="text-xs sm:text-sm font-medium">
              Save £100/year - Limited spots
            </p>
          </div>

          {/* Header */}
          <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Score Higher on <br />
            <span className="text-blue-600">IELTS</span> With 20,000+ <br />
            Real Questions
          </h1>
          <p className="text-sm sm:text-base md:text-xl">
            Practice like you're taking the real exam. Get instant feedback.
            Achieve your target band score.
          </p>
          <p className="text-sm sm:text-base md:text-xl">
            Join 15,000+ students who improved their scores by an average of 1.5
            bands
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-6">
            <div className="inline-flex gap-2 bg-green-100 w-max px-4 sm:px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base font-semibold">Real Exam Question</p>
            </div>
            <div className="inline-flex gap-2 bg-green-100 w-max px-4 sm:px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base font-semibold">Instant feedback</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-6">
            <div className="inline-flex gap-2 bg-green-100 w-max px-4 sm:px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base font-semibold">Try free - no card</p>
            </div>
            <div className="inline-flex gap-2 bg-green-100 w-max px-4 sm:px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base font-semibold">7-day guarantee</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 text-base sm:text-xl rounded-xl cursor-pointer mt-4 sm:mt-6">Get Started - Save £100</button>
            <button className="border border-blue-600 text-blue-600 text-base sm:text-xl px-6 sm:px-8 py-2 rounded-xl cursor-pointer mt-0 sm:mt-6 hover:bg-blue-100">Try 20 Free Questions</button>
          </div>
        </div>

        {/* Right Side - 50% */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md border-2 border-transparent shadow-xl"
               style={{
                 borderImageSlice: 1,
                 borderImageSource: "linear-gradient(90deg, #2563EB 0%, #0B99CE 100%)"
               }}
          >
            {/* Top Badge */}
            <div className="text-center mb-4">
              <p className="text-xs sm:text-sm font-semibold text-white px-3 sm:px-4 py-2 rounded-xl bg-blue-600 inline">Most Popular</p>
              <h2 className="text-xl sm:text-2xl font-bold text-black mt-4 sm:mt-6">Premium</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-2">
                £199 <span className="text-sm sm:text-base font-normal text-gray-500">/year</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">£16.58/month • Save £100</p>
            </div>

            {/* Divider */}
            <hr className="my-4 border-t-2 border-transparent" 
                style={{ borderImageSlice: 1, borderImageSource: "linear-gradient(90deg, #2563EB 0%, #0B99CE 100%)" }}
            />

            {/* Checklist */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"/>
                <p className="text-sm sm:text-base font-medium">20,000+ real exam questions</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"/>
                <p className="text-sm sm:text-base font-medium">All 4 sections: Listening, Reading, Writing, Speaking</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"/>
                <p className="text-sm sm:text-base font-medium">Band 9 model answers</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"/>
                <p className="text-sm sm:text-base font-medium">Instant feedback</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"/>
                <p className="text-sm sm:text-base font-medium">Progress tracking</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base py-3 rounded-xl">
              Get Premium - Save £100
            </button>
            <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">7-day guarantee • Cancel anytime</p>
            <div className="flex items-center my-3">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 font-medium text-sm">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button className="w-full mt-3 text-blue-500 cursor-pointer font-semibold border border-blue-400 text-sm sm:text-base py-3 rounded-xl">
              Get Premium - Save £100
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <Trusted />
    <Start_Practicing/>
    </>
  );
};

export default Home;