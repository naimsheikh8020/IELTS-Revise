import React from "react";
import QuestionRow from "./QuestionRow"; // <-- ADDED, nothing removed
import ReadingQuiz from "./ReadingQuiz";
import ReadingNextPreviousButton from "./ReadingNextPreviousButton";

const ReadingRighPart = () => {
  return (
    <div>
        <div className="bg-white rounded-lg shadow-sm p-6 md:mt-4">
      <div>
        <h1 className="font-bold text-xl">Part 1</h1>
        <p className="mt-2 text-gray-600 text-base">Questions 1-5</p>
        <p className="my-2 ">
          Do the statements on the next page agree with the information given in
          Reading Passage 1?
        </p>
      </div>

      <div className="mt-4">
        <div className="w-full rounded-xl border border-gray-200 overflow-hidden text-sm">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="font-semibold p-3 border-r border-gray-200">
              TRUE.
            </div>
            <div className="col-span-2 p-3">
              if the statement agrees with the information
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="font-semibold p-3 border-r border-gray-200">
              FALSE.
            </div>
            <div className="col-span-2 p-3">
              if the statement contradicts the information
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="font-semibold p-3 border-r border-gray-200">
              NOT GIVEN.
            </div>
            <div className="col-span-2 p-3">
              If there is no information on this
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-6">
        <QuestionRow number={1} text="A possible security problem" />
        <QuestionRow number={2} text="The cost of M-Pesa" />
        <QuestionRow number={3} text="An international service similar to M-Pesa" />
        <QuestionRow number={4} text="The fact that most Kenyans do not have a bank account" />
        <QuestionRow number={5} text="The fact that most Kenyans do not have a bank account" />
      </div>
    </div>


   
    <ReadingQuiz/>
     <div className="bg-white rounded-lg shadow-sm p-6 md:mt-4">
        <ReadingNextPreviousButton/>
    </div>

    </div>
  );
};

export default ReadingRighPart;


