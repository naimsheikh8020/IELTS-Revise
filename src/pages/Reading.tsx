import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { Navigate, useNavigate } from 'react-router'
import ReadingLeftPart from '../components/Reading/ReadingLeftPart'
import ReadingMiddlePart from '../components/Reading/ReadingMiddlePart'
import ReadingLayout from '../components/Reading/ReadingLayout'

const Reading = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-24">
        <SectionHeader
          title="Reading Practice"
          subtitle="Read the passage carefully. Highlight keywords to help answer questions."
          timeLimit="60:00"
          showResume={true}
          onBack={() => navigate(-1)}
        />
      </div>
      <ReadingLayout/>
    </div>
  )
}

export default Reading