import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffUser from './StaffUser';
import './Staff.css';
// import Logo from '../assets/Logo.png'

function Staff() {
  const [userStaff, setUserStaff] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/staffs')
      .then((res) => res.data)
      .then((data) => setUserStaff(data));
  }, []);
  return (
    <div className="Staff-container">
      <h2 className="staff-title">Membre du staff</h2>
      <div className="Staff">
        {userStaff.map((user) => (
          <div key={user.id}>
            <StaffUser user={user} />
          </div>
        ))}
      </div>
      {/* <img src={Logo} alt="alt" srcset="" /> */}
    </div>
  );
}

export default Staff;
