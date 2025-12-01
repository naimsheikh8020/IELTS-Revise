import { useState } from "react";
import SpeakingCard, {
  SpeakingTestList,
  speakingData,
} from "../components/Speaking/SpeakingCard";
import { useNavigate } from "react-router";
import SectionHeader from "../components/SectionHeader";
import SpeakingRightSide from "../components/Speaking/SpeakingRightSide";
import SpeakingLayout from "../components/Speaking/SpeakingLayout";

const Speaking = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24">
        <SectionHeader
          title="Speaking Practice"
          subtitle="Record your answers and speak clearly. AI will evaluate fluency, pronunciation, grammar, and vocabulary."
          timeLimit="12.00"
          onPracticeMode={() => console.log("Click Practice Mode")}
          onMockMode={() => console.log("Click Practice Mode")}
          autoSaved={true}
          onBack={() => navigate(-1)}
        />
      </div>

      {/* COMPONENT USAGE HERE */}
      <div className=" mt-3 md:ml-4 text-gray-700">
        <SpeakingLayout/>
      </div>
    </div>
  );
};

export default Speaking;
