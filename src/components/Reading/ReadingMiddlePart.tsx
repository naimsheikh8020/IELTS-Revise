import React from 'react'
import assets, { readingparagraph } from '../../assets/assets'


const ReadingMiddlePart = () => {

  const paragraph1 = readingparagraph[0].paragraph1; // <-- ONLY paragraph1

  return (
    <div className='bg-white rounded-lg shadow-sm p-6 md:mt-4'>
      
      <div>
        <div className='flex gap-3'>
          <img src={assets.ReadingPassage} />
          <p>Reading Passage</p>
        </div>
        <h2 className='mt-2 text-gray-600 text-base'>The Rise of Renewable Energy</h2>
      </div>

      <div className='mt-4'>
        {Object.values(paragraph1).map((text, index) => (
          <p key={index} className="mb-3 leading-relaxed text-gray-700">
            {text}
          </p>
        ))}
      </div>

    </div>
  )
}

export default ReadingMiddlePart
