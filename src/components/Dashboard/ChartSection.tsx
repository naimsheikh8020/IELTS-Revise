import React from 'react'
import ScoreProgressChart from './ScoreProgressChart'
import SectionPerformanceChart from './SectionPerformanceChart'

const ChartSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full my-6">
      <ScoreProgressChart />
      <SectionPerformanceChart />
    </div>
    </div>
  )
}

export default ChartSection