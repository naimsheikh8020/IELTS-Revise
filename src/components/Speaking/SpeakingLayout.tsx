import React from "react";

import SpeakingRightSide from "./SpeakingRightSide";
import { speakingData, SpeakingTestList } from "./SpeakingCard";

const SpeakingLayout = () => {
  return (
    <div className="w-full mx-auto p-4">
      {/* Parent must NOT have overflow hidden */}
      <div className="flex flex-col md:flex-row gap-6 items-start">

        {/* LEFT SIDE - Sticky Sidebar */}
        <div className="md:w-64 lg:w-72 w-full  self-start">
          <SpeakingTestList items={speakingData} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <SpeakingRightSide />
        </div>

      </div>
    </div>
  );
};


export default SpeakingLayout;
