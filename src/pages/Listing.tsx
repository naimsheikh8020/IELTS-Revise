import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { useNavigate } from 'react-router'
import Audio from '../components/Listing/Audio';

const Listing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <SectionHeader
        title="Listening Practice"
        subtitle="Listen carefully and answer each question. You may replay twice."
        timeLimit="60:00"
        showResume={true}
        onBack={() => navigate(-1)}     
        onPracticeMode={() => console.log('Practice')}
        onMockMode={() => console.log('Mock')}
        onResume={() => console.log('Resume')}
      />
      <Audio/>
     
    </div>
  )
}

export default Listing
