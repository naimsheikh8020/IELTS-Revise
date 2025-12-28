import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Clock,
} from "lucide-react";
import { IeltsTestHeaderProps, TestStepId } from "../../types/ieltsTestHeader";
import ReadingLayout from "../Reading/ReadingLayout";



const iconMap: Record<TestStepId, any> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenTool,
  speaking: Mic,
};

const IeltsTestHeader = ({
  steps,
  timeRemaining,
  answeredQuestions,
  totalQuestions,
}: IeltsTestHeaderProps) => {
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div>
        <div className="space-y-6 mt-6 p-6">


      <div className="bg-white rounded-2xl border p-6">
        <p className="text-sm font-medium text-gray-700 mb-6">
          Test Progress
        </p>

        <div className="relative">
         
          <div className="absolute top-5 left-0 right-0 h-[4px] bg-gray-200 rounded-full" />
          <div className="absolute top-5 left-0 h-[4px] bg-blue-600 rounded-full w-1/4" />

          <div className="grid grid-cols-4 relative">
            {steps.map((step) => {
              const Icon = iconMap[step.id];

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10
                    ${
                      step.isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white border text-gray-400"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-800">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500">
                    {step.duration}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <Clock size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold">Time Remaining</p>
            <p className="text-xs opacity-90">Listening Section</p>
          </div>
        </div>

        <span className="text-2xl font-bold tracking-wide">
          {timeRemaining}
        </span>
      </div>

     
      <div className="bg-white rounded-2xl border p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-blue-600">
              <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1766949860/Vector_aotrxj.svg" alt="" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Listening Section
              </p>
              <p className="text-xs text-gray-500">
                {totalQuestions} questions · 30 minutes
              </p>
            </div>
          </div>

          <span className="text-xs text-gray-500">
            {answeredQuestions} / {totalQuestions}
          </span>
        </div>

        <p className="text-xs text-gray-500 mb-2">
          Question Progress
        </p>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="border border-[#00AEEF] bg-blue-50 text-blue-700 text-sm rounded-xl px-4 py-2">
          You are currently working on the Listening section.
          Make sure to answer all questions before moving to the next section.
        </div>
      </div>

    </div>


    <ReadingLayout />




    </div>
  );
};

export default IeltsTestHeader;
