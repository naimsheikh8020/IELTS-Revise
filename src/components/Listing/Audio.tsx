import React from "react";
import assets from "../../assets/assets";
import { Clock, Play } from "lucide-react";

const Audio = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow relative">
      <div className="flex items-center relative">

        <div className="flex items-center gap-3 absolute left-0">
          <img src={assets.AudioPlayer} alt="audio" className="w-6 h-6" />
          <p className="font-semibold text-gray-800">Audio Player</p>
        </div>


        <div className="flex items-center gap-3 mx-auto">

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 bg-gray-200 rounded">
            <img src={assets.restore} alt="rewind" className="w-4 h-4" />
            <p>-5s</p>
          </button>


          <button className="flex items-center gap-2 px-3 py-2 border border-blue-600 bg-blue-600 text-white rounded">
            <Play className="w-4 h-4" />
            <p>Play</p>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 bg-gray-100 rounded">
            <Clock className="w-4 h-4" />
            <p>1:40 / 3:00</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audio;
