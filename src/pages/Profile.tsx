import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import UserProfileCard from '../components/Profile/UserProfileCard'
import ProfileTabs from '../components/Profile/RightSide'

const Profile = () => {
  return (
    <div className="min-h-screen pt-28 sm:pt-28 px-4 sm:px-8 md:px-12">
      
      <ProfileHeader />
      <div className="flex flex-col md:flex-row gap-6 mt-6 items-center md:items-start mb-6">
        
        <UserProfileCard
          name="Sarah Chen"
          email="sarah.chen@example.com"
          questions={271}
          avgScore={7.0}
          memberLevel="Pro+ Member"
          memberSince="Sep 2025"
        />

        <div className="w-full md:flex-1 flex justify-center md:justify-start">
          <ProfileTabs />
        </div>

      </div>
    </div>
  )
}

export default Profile
