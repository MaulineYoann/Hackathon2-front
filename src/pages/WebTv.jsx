import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import Image from "../assets/Twitch.png";
import './WebTv.css';

function WebTv() {
    return (
        <div>
            <img id="logo" src={Image} alt="Logo" />
            <div className="webtv-title">
            <h1>NOTRE WEB TV</h1>
            </div>
            <div className="twitch-container">
            <ReactTwitchEmbedVideo channel="talk2megooseman" />
            </div>
        </div>
    )
}

export default WebTv
