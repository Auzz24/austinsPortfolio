import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import instaLogo from "../../assets/Footer/0.png"
import linkedLogo from "../../assets/Footer/1.png"
import gitHubLogo from "../../assets/Footer/2.png"

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
        setFormState({...formState, [e.target.name]: e.target.value });
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
        setFormState({...formState, [e.target.name]: e.target.value });
      }
    }
  };

  return (
    <section id="contactBackground">
    <div id="contactForm">
      <h1 data-testid="h1tag">Contact me</h1>

      <div id="wrapper">

      <div id="leftContact">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="NAME" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <input type="email" name="email" placeholder="EMAIL"defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <textarea name="message" rows="5" placeholder="MESSAGE" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button id="button" data-testid="button" type="submit">Submit</button>
      </form>
      </div>

      <div id="rightContact">
        <div>
      <ul>
          <li>Dallas, Texas</li>
          <li><i><span><a href="mailto:#" title="Send me an email">austin.miller1424@gmail.com</a></span></i></li>
        </ul>
        </div>
        <div id="logo">
            <a href="https://www.instagram.com/auzz24_">
                <img src={instaLogo} style={{width: "5%"}} alt="headshot"></img>
            </a>
            <a href="https://www.linkedin.com/in/austin-miller-29066696/">
                <img src={linkedLogo} style={{width: "5%"}} alt="headshot"></img>
            </a>
            <a href="https://github.com/Auzz24">
                <img src={gitHubLogo} style={{width: "5%"}} alt="headshot"></img>
        </a>
            </div>
            
        </div>
        
        </div>
        </div>
    </section>
  );
}

export default ContactForm;
