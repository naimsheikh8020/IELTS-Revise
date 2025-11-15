import React from "react";
import StudentCard from "../components/StudentCard";
import  { cards } from "../assets/assets";
import { Star } from 'lucide-react';

const Trusted = () => {
  

  return (
    <div className=" ">
      <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 rounded-xl ">

        {/* Header */}
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Trusted by Students Worldwide
        </h2>
        <p className="text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4">
          Our platform delivers results that help students achieve their dream scores
        </p>

        {/* Cards Grid */}
        <div className="my-6 container mx-auto sm:my-8 lg:my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <StudentCard
              key={index}
              icon={card.icon}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="my-4 flex flex-col items-center text-center gap-2">
  {/* Stars */}
  <div className="flex text-orange-500 gap-1">
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </div>

  {/* Text */}
  <p>Rated 4.9/5 based on 3,200+ verified reviews</p>
</div>

      </div>
      
    </div>
  );
};

export default Trusted;
