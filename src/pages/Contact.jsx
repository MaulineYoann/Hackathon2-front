import React from 'react';
import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <div className="Contact">
            <div className="contact-form">Envoyez-nous un message via le formulaire ou contactez-nous directement via notre adresse mail : contact@hope-esport.fr</div>
            <div class="container"> 

                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Nom Prénom"></input>
                <label for="name">Email</label>
                <input type="text" id="email" name="email" placeholder="Email"></input>

                <label for="Request">Message</label>
                <textarea id="request" name="request" placeholder="Message"></textarea>

                <input className= "submit" type="submit" value="Envoyer" onClick={()=> alert("Votre demande d'adhésion a été envoyé !")}></input>

             </div>
        </div> 
        <Link className='link-contact' to={{pathname:'/Home'}}> < FaPaperPlane /> Retour à la page accueil</Link>
        </div>
    )
}

export default Contact;
