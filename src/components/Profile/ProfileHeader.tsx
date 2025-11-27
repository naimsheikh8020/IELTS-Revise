import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='flex items-center gap-5'>
        
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft size={26} />
        </button>

        <div>
          <h1 className='text-3xl text-blue-600 font-bold'>Profile Settings</h1>
          <p className='text-base text-gray-500'>Manage your account and subscription</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
