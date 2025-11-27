import React from 'react'
import assets from '../../assets/assets'
import { ArrowLeft } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div>
        <div className='flex items-center gap-5'>
            <div>
               <ArrowLeft size={30} />
            </div>
            <div>
                <h1 className='text-3xl text-blue-600 font-bold'>Profile Settings</h1>
                <p className='text-base  text-gray-500'>Manage your account and subscription</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader