import React from 'react'

const ReadingNextPreviousButton = () => {
  return (
    <div className='flex justify-between'>
      <button className='px-4 py-2 cursor-pointer bg-blue-600 text-base text-white rounded border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black'>
        Previous
      </button>

      <button className='px-4 py-2 cursor-pointer bg-blue-600 text-base text-white rounded border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black'>
        Next
      </button>
    </div>
  )
}

export default ReadingNextPreviousButton
