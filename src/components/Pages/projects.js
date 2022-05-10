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
          These were created by Austin from scratch using many leanguages but priomarly the MERN stack. 
        </p>
        <div id="photList">
        <h3>Covid-Travel</h3>
        <a href="https://auzz24.github.io/CovidTravel/">
            <img src={Covid} style={{width: "15%"}} alt="screenshot of covid travel website"/>
            </a>
            <p>This application will allow you to view the COVID status of your travel destination using server side APIs. Coding languges used in the project include HTML, Tailwind, and JavaScript.</p>
            <h3>Book It!!</h3>
            <a href="https://stormy-caverns-67766.herokuapp.com/">
            <img src={Book} style={{width: "15%"}} alt="screenshot of book it website"/>
            </a>
            <p>Our Book Rentals provides students with affordable textbooks, empowering more than a million students to study cheaper. This project was built with HTML, CSS, JavaScript, ES6, Node, Bootstrap, MySQL, jQuery, Materialize </p>
            <h3>Dr.HQ</h3>
            <a href="/">
            <img src={Dr} style={{width: "15%"}} alt="screenshot of Dr. HQ website"/>
            </a>
            <p>The Dr.HQ team is here to make finding a doctor easy. We believe that healthcare should be about you and your family, that is why we put your health first. We strive to deliver safe, quality and compassionate care. This project was made with React, CSS, JavaScript, ES6, Node, Reactstrap, jQuery, MongoDB, GraphQL</p>
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