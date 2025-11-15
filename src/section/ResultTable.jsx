import React from 'react';
import { Check, X } from 'lucide-react';

const ResultTable = () => {
  const features = [
    {
      label: 'Practice Questions',
      revision: '20,000+',
      traditional: '500-2,000'
    },
    {
      label: 'Cost',
      revision: 'From £16.58/month',
      traditional: '£500-2,000'
    },
    {
      label: 'Study Schedule',
      revision: '24/7 Anytime Access',
      traditional: 'Fixed Class Times'
    },
    {
      label: 'Model Answers',
      revision: 'Unlimited',
      traditional: 'Limited'
    },
    {
      label: 'Progress Tracking',
      revision: 'Real-time Analytics',
      traditional: 'Manual/Basic'
    },
    {
      label: 'Location',
      revision: 'Study Anywhere',
      traditional: 'Physical Classroom'
    },
    {
      label: 'All 4 Sections',
      revision: 'Included',
      traditional: 'Usually Extra Cost'
    },
    {
      label: 'Money-back Guarantee',
      revision: '7 Days',
      traditional: 'Rarely Offered'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 md:py-12 px-3 md:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            <span className="text-blue-600">Better Results</span>
            <span className="text-gray-800">, Lower Cost</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-lg px-2">
            See why thousands choose IELTS Revision over expensive traditional courses
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-1 md:gap-4 p-2 md:p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <div className="text-gray-700 font-semibold text-[10px] sm:text-xs md:text-base flex items-center">Feature</div>
            <div className="flex justify-center items-center">
              <button className="px-1 sm:px-2 md:px-6 py-1 sm:py-1.5 md:py-2.5 bg-blue-600 text-white font-semibold rounded-md md:rounded-lg shadow-md hover:bg-blue-700 transition-colors text-[9px] sm:text-xs md:text-base leading-tight">
                IELTS<br className="md:hidden" />Revision
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-1 sm:px-2 md:px-6 py-1 sm:py-1.5 md:py-2.5 bg-white text-blue-600 font-semibold rounded-md md:rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-[9px] sm:text-xs md:text-base leading-tight">
                Traditional<br className="md:hidden" />Courses
              </button>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-1 md:gap-4 p-2 md:p-6 hover:bg-blue-50/30 transition-colors"
              >
                <div className="text-gray-700 font-medium flex items-center text-[9px] sm:text-xs md:text-base leading-tight pr-1">
                  {feature.label}
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1 md:gap-2 px-1 sm:px-2 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-50 rounded-md md:rounded-lg border border-blue-200 w-full justify-center">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-700 font-medium text-[8px] sm:text-[10px] md:text-sm leading-tight text-center">
                      {feature.revision}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-center items-center">
                  <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1 md:gap-2 px-1 sm:px-2 md:px-4 py-1 sm:py-1.5 md:py-2 bg-red-50 rounded-md md:rounded-lg border border-red-200 w-full justify-center">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-700 font-medium text-[8px] sm:text-[10px] md:text-sm leading-tight text-center">
                      {feature.traditional}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;