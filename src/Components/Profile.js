import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div id='Profile'>
            <div id='profileSquare'>
                <img src={process.env.PUBLIC_URL + '/images/profileImg.png'} />
                <h1>Bradley Rumack</h1>
                <h3>Full Stack Developer</h3>
            </div>
        </div>
    )
}

export default Profile;