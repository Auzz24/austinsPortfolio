import React from "react";
import Covid from '../../assets/Projects/0.png';
import Book from '../../assets/Projects/1.png';
import Dr from '../../assets/Projects/2.png';
import Contact from '../../components/Pages/contact';




function Projects (){
  return (
    <section>
      <section id="project">
      <div id="projectDiscript">
        <h2>
          Projects
        </h2>
        <p>
          These were created by Austin from scratch using many languages but primarily the MERN stack and REST api's. 
          </p>
          <p>
          Click on the picture for the deployed application or check out the GitHub Link
        </p>

        <div id="photList">
        <h3 id="underline">Covid-Travel</h3>
        <a href="https://auzz24.github.io/CovidTravel/">
            <img src={Covid} style={{width: "40%", height:"40%"}} alt="screenshot of covid travel website"/>
            </a>
            <p>This application will allow you to view the COVID status of your travel destination using server side APIs. Coding languges used in the project include HTML, Tailwind, and JavaScript.</p>   
            <p id="resumeLink"> <a href="https://github.com/Auzz24/CovidTravel">GITHUB LINK</a></p>
            <h3 id="underline">Book It!!</h3>
            <a href="https://stormy-caverns-67766.herokuapp.com/">
            <img src={Book} style={{width: "40%", height:"40%"}} alt="screenshot of book it website"/>
            </a>
            <p>Our Book Rentals provides students with affordable textbooks, empowering more than a million students to study cheaper. This project was built with HTML, CSS, JavaScript, ES6, Node, Bootstrap, MySQL, jQuery, Materialize </p>
            <p id="resumeLink"> <a href="https://github.com/Auzz24/Book-it">GITHUB LINK</a></p>
            <h3 id="underline">Dr.HQ</h3>
            <a href="/">
            <img src={Dr} style={{width: "40%", height:"40%"}} alt="screenshot of Dr. HQ website"/>
            </a>
            <p>The Dr.HQ team is here to make finding a doctor easy. We believe that healthcare should be about you and your family, that is why we put your health first. This project was made with React, CSS, JavaScript, ES6, Node, Reactstrap, jQuery, MongoDB, GraphQL</p>
            <p id="resumeLink"> <a href="https://github.com/Auzz24/Dr.HQ">GITHUB LINK</a></p>
          </div>
</div>
</section>
<footer>
  <Contact/>
</footer>
    </section>
  );
}


export default Projects; 