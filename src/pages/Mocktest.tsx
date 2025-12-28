import IeltsTestHeader from "../components/MockTest/IeltsTestHeader";
import TestFooter from "../components/MockTest/TestFooter";

import type { TestStep } from "../types/ieltsTestHeader";
import type { TestInstruction } from "../types/testFooter";

const Mocktest = () => {
  const steps: TestStep[] = [
    {
      id: "listening",
      label: "Listening",
      duration: "30 minutes",
      isActive: true,
    },
    {
      id: "reading",
      label: "Reading",
      duration: "30 minutes",
      isActive: false,
    },
    {
      id: "writing",
      label: "Writing",
      duration: "30 minutes",
      isActive: false,
    },
    {
      id: "speaking",
      label: "Speaking",
      duration: "11–14 minutes",
      isActive: false,
    },
  ];

  const instructions: TestInstruction[] = [
    {
      id: 1,
      text: "Complete all four sections in order: Listening, Reading, Writing, and Speaking",
    },
    {
      id: 2,
      text: "Each section must be completed within the time limit",
    },
    {
      id: 3,
      text: "You cannot return to a previous section once completed",
    },
    {
      id: 4,
      text: "Your progress is automatically saved",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="">

        {/* Page Title */}
        <div className="pl-6 pr-6 pb-6">
          <h1 className="text-3xl font-semibold text-blue-600">
            IELTS Mock Test
          </h1>
          <p className="text-gray-500 mt-1">
            Complete full-length practice test under exam conditions
          </p>
        </div>

        {/* Header */}
        <IeltsTestHeader
          steps={steps}
          timeRemaining="24:15"
          answeredQuestions={12}
          totalQuestions={40}
        />

        {/* Footer */}
       <div className="p-6">
         <TestFooter
          instructions={instructions}
          onPrevious={() => console.log("Previous section")}
          onNext={() => console.log("Next section")}
        />
       </div>

      </div>
    </div>
  );
};

export default Mocktest;
