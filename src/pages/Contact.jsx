import './Contact.css';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
    let iconStyles = {
        color: '#FBB03B',
        fontSize: '2em',
      };
    return (
        <div className="Contact">
            <div className="contact-form">Envoyez-nous un message via le formulaire ou contactez-nous directement via notre adresse mail: contact@hope-esport.fr </div>
            <div class="container"> 

                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Nom"></input>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email"></input>

                <label for="Request">Message</label>
                <textarea className="request" name="request" placeholder="Message"></textarea>

                <input className= "submit" type="submit" value="Envoyer" onClick={()=> alert("You've just submitted your Contact form !")}></input>

             </div>
             <div className="home-contact">
             <Link to={{pathname:'/'}}>< FaHome style={iconStyles}/></Link>
             </div>
        </div>
    )
}

export default Contact;
