import { Award, Eye, TrendingUp, RefreshCw, Download, CheckCircle, AlertCircle } from "lucide-react";
import { fakeAiResult } from "../../assets/assets";
import { useWritingStore } from "../../store/writingStore";
import { useEffect } from "react";

export default function WritingAIFeedbackPage() {
  const { responseText } = useWritingStore();
  const data = fakeAiResult;
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);



  return (
    <div className="w-full min-h-screen bg-gray-50 pt-20 md:pt-32 pb-10">
      <div className=" px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Top text */}
        <p className="text-center font-semibold text-gray-500 text-base md:text-2xl">
          Well done! Here's your evaluation.
        </p>

        {/* Overall Score */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 md:p-8 rounded-lg shadow-lg overflow-hidden">
          <div className="max-w-xl">
            <p className="text-base md:text-lg font-medium flex items-center gap-2">
              <Award className="w-5 h-5" />
              Overall IELTS Band Score
            </p>
            <p className="text-sm md:text-base opacity-90 mt-1">
              Based on your writing performance
            </p>
          </div>

          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white text-blue-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg">
            {data.overall}
          </div>
        </div>

        {/* AI Feedback Box */}
        <div className="bg-white border border-gray-200 shadow rounded-lg p-4 md:p-6">
          <p className="flex items-center gap-2 font-medium text-gray-700 mb-4 text-sm md:text-base">
            <span className="text-yellow-500 text-xl">⭐</span> AI Feedback
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6">
            <p className="text-center font-medium text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Estimated Band Score
            </p>

            {/* Criteria */}
            <div className="space-y-3 md:space-y-4">
              {data.criteria.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <p className="text-gray-700 text-sm md:text-base flex-1">
                    {c.label}
                  </p>
                  <span className="bg-gray-200 text-gray-800 font-semibold text-sm md:text-base px-4 py-1.5 rounded min-w-[3rem] text-center">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
              <div>
                <p className="font-semibold text-green-600 mb-3 flex items-center gap-2 text-sm md:text-base">
                  Strengths
                </p>
                <ul className="space-y-2 md:space-y-2.5">
                  {data.strengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-orange-600 mb-3 flex items-center gap-2 text-sm md:text-base">
                  Areas for Improvement
                </p>
                <ul className="space-y-2 md:space-y-2.5">
                  {data.improvements.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                      <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Breakdown Label */}
          <p className="font-medium text-gray-700 mt-6 mb-4 text-sm md:text-base">
            Performance Breakdown
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="py-3 md:py-3.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium text-sm md:text-base">
            <Eye className="w-4 h-4 md:w-5 md:h-5" />
            View Detailed Feedback
          </button>
          <button className="py-3 md:py-3.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700 text-sm md:text-base">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
            Compare with Previous Tests
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="py-3 md:py-3.5 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2 font-medium text-sm md:text-base">
            <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
            Take Another Practice Test
          </button>
          <button className="py-3 md:py-3.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-gray-700 text-sm md:text-base">
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}