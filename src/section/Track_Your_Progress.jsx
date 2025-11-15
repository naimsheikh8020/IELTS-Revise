import React from 'react';
import assets from "../assets/assets";

const Track_Your_Progress = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Track Your <span className='text-blue-600'>Progress</span>
          </h2>
          <p className='text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4'>
            Advanced analytics help you understand your strengths and focus on areas that need improvement
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Score Prediction Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <img src={assets.successrate} alt="Score Prediction" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Score Prediction</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered analysis predicts your likely IELTS band score based on practice performance
                </p>
              </div>
            </div>
          </div>

          {/* Weak Area Detection Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <img src={assets.authentic} alt="Weak Area Detection" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Weak Area Detection</h3>
                <p className="text-gray-600 text-sm">
                  Identifies specific topics and question types where you need more practice
                </p>
              </div>
            </div>
          </div>

          {/* Time Management Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <img src={assets.time} alt="Time Management" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Time Management</h3>
                <p className="text-gray-600 text-sm">
                  Track your speed and learn to complete sections within exam time limits
                </p>
              </div>
            </div>
          </div>

          {/* Performance Analytics Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <img src={assets.achivement} alt="Performance Analytics" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Performance Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Detailed charts show your improvement over time across all four sections
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Banner */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
          <h3 className="font-bold text-xl sm:text-2xl text-center mb-4">
            See Your Band Score Improve Week by Week
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Our students improve an average of <span className="text-green-600 font-semibold">1.5 bands</span> within just{' '}
            <span className="text-green-600 font-semibold">8 weeks</span> of consistent practice
          </p>
          
          {/* Score Progress */}
          <div className="flex items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">6.0</div>
              <p className="text-gray-600 text-sm">Starting Score</p>
            </div>
            
            <div className="text-green-500">
              <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-teal-600 mb-2">7.5</div>
              <p className="text-gray-600 text-sm">Target Achieved</p>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-4">8 Weeks</p>
        </div>
      </div>
    </div>
  );
};

export default Track_Your_Progress;
