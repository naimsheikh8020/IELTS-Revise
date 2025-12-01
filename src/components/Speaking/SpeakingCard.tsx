import React from "react";

export interface SpeakingCardProps {
  part: string;
  time: string;
  description: string;
  questionLabel: string;
  className?: string;
}

// data array
export const speakingData: SpeakingCardProps[] = [
  {
    part: "Part 1 - Introduction & Interview",
    time: "4-5 minutes",
    description:
      "Answer questions about yourself, your home, work/studies, and familiar topics.",
    questionLabel: "Question 5 of 5",
  },
  {
    part: "Part 2 - Long Turn",
    time: "3-4 minutes",
    description:
      "Speak for 1-2 minutes on a given topic after 1 minute preparation.",
    questionLabel: "Question 1 of 5",
  },
  {
    part: "Part 3 - Discussion",
    time: "4-5 minutes",
    description:
      "Discuss abstract ideas and issues related to Part 2 topic.",
    questionLabel: "Question 1 of 5",
  },
];
export default function SpeakingCard({
  part,
  time,
  description,
  questionLabel,
  
}: SpeakingCardProps) {
  return (
    <div className={`rounded-lg  bg-white p-2 shadow-sm border border-gray-100`}>
      <div className="rounded-md p-4 bg-white">
        <h3 className="text-sm font-medium text-gray-800 leading-snug">{part}</h3>

        <p className="text-[11px] text-gray-500 mt-1">{time}</p>

        <div className="mt-3">
          <span className="inline-block text-[11px] px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-white">
            {questionLabel}
          </span>
        </div>

        <p className="text-[12px] text-gray-600 mt-3 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// list component: parent container that holds 3 cards
export function SpeakingTestList({ items }: { items: SpeakingCardProps[] }) {
  return (
    <div className="w-full md:w-64 lg:w-72">
      <div className="rounded-lg border border-gray-200 p-4 bg-white">
        <h4 className=" text-blue-600 text-xl font-medium">Speaking Test Parts</h4>

        <div className="mt-3 flex flex-col gap-3">
          {items.map((item, idx) => (
            <SpeakingCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}