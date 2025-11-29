import React from "react";
import assets from "../../assets/assets";
import { Clock, Play } from "lucide-react";

const Audio = ({
  currentTime = "1:40",
  totalTime = "3:00",
  progress = 40,
  onPlay,
  onRewind,
}) => {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl shadow relative">

      {/* TOP ROW */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start relative mb-5 gap-4">

        {/* LEFT — Title */}
        <div className="flex items-center gap-2 lg:gap-3 lg:absolute lg:left-0">
          <img src={assets.AudioPlayer} alt="audio" className="w-5 h-5 lg:w-6 lg:h-6" />
          <p className="font-semibold text-gray-800 text-sm lg:text-base">Audio Player</p>
        </div>

        {/* CENTER — Buttons */}
        <div
          className="
            flex flex-wrap lg:flex-nowrap 
            items-center justify-center gap-3 
            w-full mt-2 lg:mt-0 lg:mx-auto
          "
        >
          {/* Rewind */}
          <button
            onClick={onRewind}
            className="
              flex items-center gap-1 lg:gap-2 
              px-3 py-2 
              border border-gray-300 bg-gray-200 
              rounded text-sm lg:text-base
            "
          >
            <img src={assets.restore} alt="rewind" className="w-4 h-4" />
            <p>-5s</p>
          </button>

          {/* Play */}
          <button
            onClick={onPlay}
            className="
              flex items-center gap-1 lg:gap-2 
              px-3 py-2 
              border border-blue-600 bg-blue-600 
              text-white rounded
              text-sm lg:text-base
            "
          >
            <Play className="w-4 h-4" />
            <p>Play</p>
          </button>

          {/* Timer */}
          <button
            className="
              flex items-center gap-1 lg:gap-2 
              px-3 py-2 
              border border-gray-300 bg-gray-100 
              rounded text-sm lg:text-base
            "
          >
            <Clock className="w-4 h-4" />
            <p>
              {currentTime} / {totalTime}
            </p>
          </button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Audio;
