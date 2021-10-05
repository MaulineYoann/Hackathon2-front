import './Contact.css';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const [sent, setSent] = useState(false)
  const [text, setText] = useState('')
  const handleSend = async (e) => {
    setSent(true)
    try {
        await axios.post("http://localhost:8000/send_mail", {
            text
        })
    } catch (error) {
        console.error(error)
    }
}

 let iconStyles = {
    color: '#FBB03B',
    fontSize: '2em',
  };
  return (
    <div className="Contact">
      <div className="contact-form">
        Envoyez-nous un message via le formulaire ou contactez-nous directement
        via notre adresse mail: contact@hope-esport.fr{' '}
      </div>
      <div class="container">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Nom"></input>

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email"></input>

          {!sent ? (
        <form onSubmit={handleSend}>
        <label for="Request">Message</label>
        <input
          className="submit"
          type="text"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)} />
          <button className="send" type="submit">Envoyer</button>
        </form>
        ) : (
            <h2>Message Envoyé</h2>
        )}
      </div>
      <div className="home-contact">
        <Link to={{ pathname: '/' }}>
          <FaHome style={iconStyles} />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
