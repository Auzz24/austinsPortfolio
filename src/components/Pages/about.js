import React from "react";
import headShot from "../../assets/About/0.png"
import Contact from '../../components/Pages/contact';

function About() {
    return(
        <section>
        <section id="aboutMeDiv">
            <div id="projectDiscript">
            <h2>Welcome to Austin's Portfolio</h2>
            <img src={headShot} style={{width: "15%"}} alt="headshot"/>
            <p>
                Austin Miller is a full-stack web developer, with a specialization in the MERN stack and mySQL.
            </p>
            <div id="proficiencies">
            <ul>
            <p>Front-end Proficiencies</p>
                <li>HTML </li>
                <li>CSS </li>
                <li>JavaScript</li>
                <li>jQuery </li>
                <li>Responsive Desighn </li>
                <li>React </li>
                <li>Bootstrap</li>
            </ul>
                <ul>
                <p>Back-end Proficiencies</p>
                <li>APi's </li>
                <li>Node </li>
                <li>Express</li>
                <li>MySql, Sequilize </li>
                <li>MongoDB, Mongoose</li>
                <li>REST </li>
                <li>GraphQL</li>
                </ul>
            </div>
                       <section id="resume">
            <div>
                <p id="resumeLink"> Download my Resume:<a href="https://docs.google.com/document/d/1RPMMFWWAuMLJ2uevABlFFVKmOMBAIG9m/edit?usp=sharing&ouid=108598029225481980968&rtpof=true&sd=true">HERE</a></p>

                <p id="resumeLink"> Here is the link to this project's GitHub:<a href="https://github.com/Auzz24/austinsPortfolio">GITHUB LINK</a></p>

            </div>
            </section>
            </div> 
        </section>
        <footer>
  <Contact/>
</footer>
        </section>
    );
}

export default About; 