import React from 'react'
import ReadingLeftPart from './ReadingLeftPart'
import ReadingMiddlePart from './ReadingMiddlePart'
import ReadingRightPart from './ReadingRighPart'

const ReadingLayout = () => {
  return (
    <div className="px-6 py-4">
      <div
        className="
    grid grid-cols-1
    lg:grid-cols-[200px_minmax(400px,1fr)_minmax(350px,450px)]
    xl:grid-cols-[240px_minmax(500px,1fr)_minmax(380px,480px)]
    2xl:grid-cols-[260px_1fr_500px]
    gap-4 xl:gap-6"
      >
        {/* LEFT SIDE (HIDDEN ON TABLET) */}
        <div className="hidden lg:block">
          <ReadingLeftPart />
        </div>
        {/* MIDDLE SIDE */}
        <ReadingMiddlePart />
        {/* RIGHT SIDE */}
        <ReadingRightPart />
      </div>
    </div>
  )
}

export default ReadingLayout