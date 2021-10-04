import React from 'react';
import TweetEmbed from "react-tweet-embed";
import Image from "../assets/Logo.png";
import './Home.css';

function Home() {
    return (
        <div className="Home">
        <img id="logo" src={Image} alt="Logo" />
        <div className="Home-container">
            <div className="text-container">
                <h1 className="title-home">Historique</h1>
                <p>Afin de combler leurs différents objectifs, SKZ et Zary décident de créer leur propre structure en décembre 2020.</p>
                <p>Voici nos principaux objectifs pour l’année 2021 :</p>
                <p>Développer la scène compétitive Hearthstone à travers l’organisation de différents évènements (tournois communautaires, tournois rémunérés, etc.).</p>
                <p>Recruter des joueurs « espoirs », riches d’ambitions, afin de les pousser vers l’excellence.</p>
                <p>A plus long terme, devenir une structure référente sur Hearthstone.</p>
            </div>
            <div className="twitter-container">
                <TweetEmbed id="1444708857171910667" placeholder={"loading"} />
                <TweetEmbed id="1444346445495083012" placeholder={"loading"} /> 
                <TweetEmbed id="1443984955575619587" placeholder={"loading"} />
            </div>
        </div>
        </div>
    )
}

export default Home
