import React from 'react';
import TweetEmbed from "react-tweet-embed";
import Image from "../assets/Logo.png";
import './Home.css';

function Home() {
    return (
        <div className="Home">
        <h1 className="title-Home">Historique</h1>
        <p className="text-Home">Afin de combler leurs différents objectifs, SKZ et Zary décident de créer leur propre structure en décembre 2020.</p>
        <p className="text-Home">Développer la scène compétitive Hearthstone à travers l’organisation de différents évènements (tournois communautaires, tournois rémunérés, etc.).
Recruter des joueurs « espoirs », riches d’ambitions, afin de les pousser vers l’excellence.
A plus long terme, devenir une structure référente sur Hearthstone.
 

Afin de mener à bien nos projets, voici les étapes que nous avons parcourues jusqu’ici :

Nous avons commencé par recruter un staff afin d’assurer le bon développement de la structure.
La suite logique fut le recrutement de joueurs prometteurs : Roulian, Logoss et Bongo, qui se qualifient régulièrement aux tournois mondiaux (Master Tour)</p>
        </div>
    )
}

export default Home
