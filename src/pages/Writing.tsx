import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import WritingLayout from "../components/Writing/WritingLayout";

const Writing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
     <div className="pt-24">
       <SectionHeader
        title="Writing Practice"
        subtitle="Complete both tasks within the time limit. Focus on task achievement, coherence, and vocabulary."
        timeLimit="60:00"
        onBack={() => navigate(-1)}
        onPracticeMode={() => {console.log("Practice Mode activated")}}
        onMockMode={() => {console.log("Mock Mode activated");}}
        onResume={() => {console.log("Resume clicked");}}
        autoSaved={true}
      />
     </div>

      {/* Your page content here */}
      <div className=" text-gray-700">
        <WritingLayout initialTask={1} showTips={true} />;
      </div>
    </div>
  );
};

export default Writing;
