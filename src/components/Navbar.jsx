import React from 'react';
import './Navbar.css';
import { useState } from "react";
import Logo from '../assets/Logo.png'
import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'
function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar_logo">
                <img className="logo" src={Logo} alt="Logo"></img>
            </div>
            <ul className="navbar_links">
                <div className="navbar_item slideInDown-1">
                    <a href="/" className="navbar_link">Accueil</a>
                </div>
                <div className="navbar_item slideInDown-2">
                    <a href="/web-tv" className="navbar_link">Web TV</a>
                </div>
                <div className="navbar_item slideInDown-3">
                    <a href="/team" className="navbar_link">Équipe Hearthstone</a>
                </div>
                <div className="subnav">
                    <a href="/#" className="navbar_link">Association</a>
                    <div className="subnav-content">
                        <li className="navbar_item slideInDown">
                            <a href="/news" className="submenu_link">À Propos</a>
                        </li>
                        <li className="navbar_item slideInDown">
                            <a href="/staff" className="submenu_link">Staff</a>
                        </li>
                        <li className="navbar_item slideInDown">
                            <a href="/project" className="submenu_link">Projets</a>
                        </li>
                    </div>
                </div>
                <div className="navbar_item slideInDown-4">
                    <a href="/contact" className="navbar_link">Contact</a>
                </div>

            </ul>
            <div className="icon-container">
                <a href="https://twitter.com/HopeEsportHS">
                    <img alt="twitter icon" src={twitter} className="icon"></img>
                </a>
                <a href="https://t.co/Q76StyXJWm?amp=1">
                    <img alt="discord icon" src={discord} className="icon"></img>
                </a>
            </div>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </div>
    )
}

export default Navbar
