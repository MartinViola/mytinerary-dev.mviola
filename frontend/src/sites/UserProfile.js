import React from 'react'
import '../styles/userProfile.css'

function UserProfile() {
  return (
    <div className='userProfileContainer'>
        <img className="underconstructionImageMyProfile" src={process.env.PUBLIC_URL+`/img/under_construction.png`} alt="image" />
    </div>
  )
}

export default UserProfile