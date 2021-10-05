import React from 'react';
import './Team.css';
import './TeamList.css';
import { FaTwitter } from 'react-icons/fa';

function Team({ team }) {
  let iconStyles = {
    color: '#FFFFFF',
    backgroundColor: '#702972',
    border: '2px solid ',
    borderRadius: '50%',
    fontSize: '2em',
  };
  return (
    <div className="Team">
      <div className="player-team-container">
      <img className="picture-player" src={process.env.PUBLIC_URL + team.picture } />
        <div className="player-name">
          {team.name}
        </div>
        <div className="player-mood">{team.mood}</div>
        <div className="player-prize">
          <h1 className="h1">Palmarès : </h1>
          {team.prize_list}
        </div>
        <div className="catchphrase">
          <h1 className="h1">Phrase culte : </h1>
          {team.catchphrase}
        </div>
        <div className="description">
          <h1 className="h1">Description : </h1>
          {team.description}
        </div>
        <div className="games">
          <h1 className="h1">Autres jeux : </h1>
          {team.other_games}
        </div>
        <div className="player-media">
          <h1 className="h1">Réseaux sociaux</h1>
          {team.social_media}
        </div>
        <div className="logo-twitter">
          <FaTwitter style={iconStyles} />
        </div>
      </div>
    </div>
  );
}

export default Team;
