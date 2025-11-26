import React from 'react'
import ScoreCard from './ScoreCard'
import assets from '../../assets/assets'

const ScoreSection = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <ScoreCard title="Listening" icon={assets.listinginfroielts} score="28/40" band="Band 7.0" extra="Focus on Q15-20: 60% accuracy" progress={70} advice=""/>
        <ScoreCard title="Reading" icon={assets.readingforielts} score="28/40" band="Band 7.0" extra="Focus on Q15-20: 60% accuracy" progress={70} advice=""/>
        <ScoreCard title="Writting" icon={assets.writingforielts} score="28/40" band="Band 7.0" extra="Focus on Q15-20: 60% accuracy" progress={70} advice=""/>
        <ScoreCard title="Speaking" icon={assets.speakingforielts} score="28/40" band="Band 7.0" extra="Focus on Q15-20: 60% accuracy" progress={70} advice=""/>
    </div>
    </div>
  )
}

export default ScoreSection