import React from 'react';
import './Team.css';
import logo from '../assets/Hearthstone.png';

function Team({ player }) {
  return (
    <div className="Team">
        <div className="team-background">
      <img className="team-logo" id="logo" src={logo} alt="Logo" width="815" height="325" />
      </div>
      <div className="team-title">NOTRE EQUIPE HEARTHSTONE </div>
      <div className="player-team">
        <p>{player.name}</p>

      </div>
      
    </div>
  );
}

export default Team;
