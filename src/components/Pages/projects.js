import React from "react";
import Covid from '../../assets/Projects/0.png';
import Book from '../../assets/Projects/1.png';
import Dr from '../../assets/Projects/2.png';
import Contact from '../../components/Pages/contact';



function Projects (){
  return (
    <section>
      <section id="project">
      <div>
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
            <p>This app was made for a figurative Running Club using HTML, and CSS</p>
            <h3>Book It!!</h3>
            <a href="https://stormy-caverns-67766.herokuapp.com/">
            <img src={Book} style={{width: "15%"}} alt="screenshot of book it website"/>
            </a>
            <p>Our Book Rentals provides students with affordable textbooks, empowering more than a million students to study cheaper. </p>
            <h3>Dr.HQ</h3>
            <a href="/">
            <img src={Dr} style={{width: "15%"}} alt="screenshot of Dr. HQ website"/>
            </a>
            <p>Hospital Management App Project! As the name suggests, the app is designed to manage hospital tasks like booking an appointment, etc. The project technologies include Javascript, MySQL, PHP, and Bootstrap. Whereas the application’s web server is built on XAMPP. We believe that healthcare should be about you and your family. We strive to deliver safe, quality care compassionately and with absolute integrity.</p>
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