import React from "react";
import assets from "../assets/assets";
import { Check } from "lucide-react";

const Home = () => {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - 50% */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Top Achievement - width auto */}
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 text-red-600 rounded-full w-max">
            <img
              src={assets.top_Achivment}
              alt="achievement"
              className="h-6 w-6"
            />
            <p className="text-sm font-medium">
              Save £100/year - Limited spots
            </p>
          </div>

          {/* Header */}
          <h1 className="text-black font-bold text-4xl md:text-7xl leading-[85px]">
            Score Higher on <br />
            <span className="text-blue-600">IELTS</span> With 20,000+ <br />
            Real Questions
          </h1>
          <p className="text-xl">
            Practice like you're taking the real exam. Get instant feedback.
            Achieve your target band score.
          </p>
          <p className="text-xl">
            Join 15,000+ students who improved their scores by an average of 1.5
            bands
          </p>
          <div className="flex gap-6">
            <div className="inline-flex gap-2 bg-green-100 w-max px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold" />
              <p className="text-base font-semibold">Real Exam Question</p>
            </div>
            <div className="inline-flex gap-2 bg-green-100 w-max px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold" />
              <p className="text-base font-semibold">Real Exam Question</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="inline-flex gap-2 bg-green-100 w-max px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold" />
              <p className="text-base font-semibold">Real Exam Question</p>
            </div>
            <div className="inline-flex gap-2 bg-green-100 w-max px-6 py-2 rounded-2xl items-center">
              <Check className="text-green-600 font-semibold" />
              <p className="text-base font-semibold">Real Exam Question</p>
            </div>
          </div>

          <div className="flex gap-6">
            <button className="bg-blue-600 text-white px-8 py-2 text-xl rounded-xl cursor-pointer mt-6">Get Started - Save £100</button>
            <button className="border border-blue-600 text-blue-600 text-xl px-8 py-2 rounded-xl cursor-pointer mt-6 hover:bg-blue-100">Try 20 Free Questions</button>
          </div>
        </div>

        {/* Right Side - 50% */}
{/* Right Side - 50% */}
<div className="md:w-1/2 flex justify-center">
  <div className="bg-white rounded-2xl p-8 w-full max-w-sm h-[75vh] border-2 border-transparent shadow-xl"
       style={{
         borderImageSlice: 1,
         borderImageSource: "linear-gradient(90deg, #2563EB 0%, #0B99CE 100%)"
       }}
  >
    {/* Top Badge */}
    <div className="text-center mb-4">
      <p className="text-sm font-semibold text-white px-4 py-2 rounded-xl bg-blue-600 inline">Most Popular</p>
      <h2 className="text-2xl font-bold text-black mt-6">Premium</h2>
      <p className="text-3xl font-extrabold text-blue-600 mt-2">
        £199 <span className="text-base font-normal text-gray-500">/year</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">£16.58/month • Save £100</p>
    </div>

    {/* Divider */}
    <hr className="my-4 border-t-2 border-transparent" 
        style={{ borderImageSlice: 1, borderImageSource: "linear-gradient(90deg, #2563EB 0%, #0B99CE 100%)" }}
    />

    {/* Checklist */}
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2">
        <Check className="text-green-600 w-5 h-5"/>
        <p className="text-base font-medium">20,000+ real exam questions</p>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-green-600 w-5 h-5"/>
        <p className="text-base font-medium">All 4 sections: Listening, Reading, Writing, Speaking</p>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-green-600 w-5 h-5"/>
        <p className="text-base font-medium">Band 9 model answers</p>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-green-600 w-5 h-5"/>
        <p className="text-base font-medium">Instant feedback</p>
      </div>
      <div className="flex items-center gap-2">
        <Check className="text-green-600 w-5 h-5"/>
        <p className="text-base font-medium">Progress tracking</p>
      </div>
    </div>

    {/* CTA Button */}
    <button className="w-full mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3 rounded-xl">
      Get Premium - Save £100
    </button>
    <p className="mt-6 text-center">7-day guarantee • Cancel anytime</p>
    <div className="flex items-center my-3">
  <hr className="flex-grow border-t border-gray-300" />
  <span className="mx-4  font-medium">OR</span>
  <hr className="flex-grow border-t border-gray-300" />
</div>
<button className="w-full mt-3  text-blue-500 cursor-pointer font-semibold border border-blue-400  text-base py-3 rounded-xl">
      Get Premium - Save £100
    </button>
  </div>
</div>
      </div>
    </section>
  );
};

export default Home;
