import React from "react";
import StudentCard from "../components/StudentCard";
import assets from "../assets/assets";

const Trusted = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-100 p-6 sm:p-8 lg:p-10 rounded-xl">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Trusted by Students Worldwide
        </h2>
        <p className="text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4">
          Our platform delivers results that help students achieve their dream
          scores
        </p>
        <div className="my-6 sm:my-8 lg:my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StudentCard
            icon={assets.people}
            number={120}
            title="Students Enrolled"
            description="Total number of active students"
          />
          <StudentCard
            icon={assets.people}
            number={120}
            title="Students Enrolled"
            description="Total number of active students"
          />
          <StudentCard
            icon={assets.people}
            number={120}
            title="Students Enrolled"
            description="Total number of active students"
          />
          <StudentCard
            icon={assets.people}
            number={120}
            title="Students Enrolled"
            description="Total number of active students"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;