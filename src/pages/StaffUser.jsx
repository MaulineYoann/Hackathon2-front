import React from 'react'
import './StaffUser.css'
import Logo from '../assets/Logo.png'

function StaffUser({user, index}) {
    return (
        <div className={"staffUser "+(index % 2 ? "reverses" : "")}>
            <div className="staff">
                <img src={Logo} alt="logo" />
                <h2 className="user-propriety">nom: {user.name}</h2>
                <h2 className="user-propriety">age: {user.age} ans</h2>
                <h2 className="user-propriety">poste: {user.job}</h2>
                <h2 className="user-propriety">{user.social_media}</h2>
            </div>
          

        </div>
    )
}

export default StaffUser
