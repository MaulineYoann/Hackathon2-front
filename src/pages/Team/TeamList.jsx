import React, { useState, useEffect } from 'react';
import Team from './Team';
import axios from 'axios';
import logo from '../../assets/Hearthstone.png';
import './TeamList.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/players')
      .then((res) => res.data)
      .then((data) => setTeams(data));
  }, []);

  let iconStyles = {
    color: '#FBB03B',
    fontSize: '2em',
  };

  return (
    <div className="Teams">
      <div className="team-background">
        <img
          className="team-logo"
          id="logo"
          src={logo}
          alt="Logo"
          width="815"
          height="325"
        />
      </div>
      <div className="team-title">NOTRE ÉQUIPE HEARTHSTONE </div>
      <div className="team-container">
        {teams.map((team) => (
          <div key={team.id}>
            <Team team={team} />
          </div>
        ))}
      </div>
      <div className="home-player">
      <Link to={{pathname:'/'}}>< FaHome style={iconStyles}/></Link>
      </div>
    </div>
  );
}

export default TeamList;
