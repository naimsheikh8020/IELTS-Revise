import React from 'react';
import { ArrowLeft, Clock, Play } from 'lucide-react';
import assets from '../assets/assets';

const SectionHeader = ({
  title = "",
  subtitle = "",
  timeLimit = "",
  onBack,
  onPracticeMode,
  onMockMode,
  onResume,
  showResume = false,
  autoSaved = true
}) => {
  return (
    <div className="w-full border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div
        className="flex flex-wrap items-center justify-between gap-y-3 max-w-full"
      >
        {/* Left Section - Back Button and Title */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-blue-600">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right Section - Timer and Buttons */}
        <div
          className="
            flex flex-wrap items-center justify-end 
            gap-3 sm:gap-4 md:gap-6 
            w-full sm:w-auto
          "
        >
          {/* Timer */}
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-red-600 font-semibold text-base sm:text-lg">
              {timeLimit}
            </span>
          </div>

          {/* Practice Mode Button */}
          <button
            onClick={onPracticeMode}
            className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Practice Mode
          </button>

          {/* Mock Mode Button */}
          <button
            onClick={onMockMode}
            className="px-3 sm:px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            Mock Mode
          </button>

          {/* Resume Button (Optional) */}
          {showResume && (
            <button
              onClick={onResume}
              className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <Play className="w-4 h-4" />
              Resume
            </button>
          )}

          {/* Auto-saved Indicator */}
          {autoSaved && (
            <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 gap-2 text-xs sm:text-sm text-gray-600 px-3 sm:px-4 py-2">
              <img src={assets.Autosave} className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Auto-saved</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
