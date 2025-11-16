import React from 'react'
import PracticeCard from '../components/PracticeCard';
import assets from '../assets/assets';

const Start_Practicing = () => {
 return (
    <div className='px-4 sm:px-6 lg:px-10'>
    <div className='p-6 mt-10 sm:p-8 lg:p-10'>
        <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center'>Start Practicing Any Section</h2>
     <p className="text-gray-500 font-normal mt-3 sm:mt-4 text-sm sm:text-base text-center px-4">
          Click any section below to start your practice immediately
    </p>
    <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  py-12">
      <PracticeCard
        icon={assets.listing}
        title="Listening"
        subtitle="30-minute audio tests"
        questionsCount="25,000"
        onClick={() => console.log("Listening clicked")}
      />

      <PracticeCard
        icon={assets.reading}
        title="Reading"
        subtitle="60-minute passages"
        questionsCount="30,000"
        onClick={() => console.log("Reading clicked")}
      />
      <PracticeCard
        icon={assets.writing}
        title="Writing"
        subtitle="Task 1 & Task 2"
        questionsCount="15,000+ Question"
        onClick={() => console.log("Reading clicked")}
      />
      <PracticeCard
        icon={assets.speaking}
        title="Speaking"
        subtitle="Part 1, 2 & 3"
        questionsCount="30,000+ Question"
        onClick={() => console.log("Reading clicked")}
      />

      
    </div>
    </div>
    </div>
  );
}

export default Start_Practicing