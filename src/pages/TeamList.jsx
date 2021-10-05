import React, { useState, useEffect} from 'react';
import Team from './Team';
import axios from 'axios';

function TeamList() {
    const [ teams , setTeams] = useState([]);
 
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/players")
        .then((res) => res.data)
        .then((data) => setTeams(data))
       
    }, [])
 
    return(
        <div className="Teams">
            <div className="team-container">
            {teams
            .map((player) => (
                <div key={player.id}>
                    < Team player={player}/>
                </div>))}
            </div> 
        </div>
    )
}
 
export default TeamList;