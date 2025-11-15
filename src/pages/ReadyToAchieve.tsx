import React from 'react';

const CTABanner = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with custom linear gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-90"
        // Using custom Tailwind colors to closely match the image
        // from-[#2A6FFD] to-[#1AB773] would be more precise if defining custom colors
        aria-hidden="true" 
      ></div>
      {/* Optional: You can place a subtle background image here if needed,
          but the prompt specifically asked for linear gradient background color.
          If you had an image URL for the background, it would go something like:
          <img src="your-background-image.jpg" alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-20" />
      */}

      <div className="relative max-w-4xl mx-auto text-center text-white">
        {/* Headline */}
        <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
          Ready to Achieve Your Target Band Score?
        </h2>

        {/* Sub-headline / Description */}
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Join 15,000+ students who improved their scores with our proven practice system
          <br />
          Start with 20 free questions or upgrade to Premium for unlimited access
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold rounded-lg shadow-lg transition duration-300">
            Get Premium - Save £100
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-green-300 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 text-white font-bold rounded-lg shadow-lg transition duration-300">
            Try Free (No Card Required)
          </button>
        </div>

        {/* Feature List with Checkmarks */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm sm:text-base font-medium opacity-90">
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            Cancel anytime
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            7-day guarantee
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            Instant access
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;