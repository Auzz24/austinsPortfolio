import React from 'react';
import Runbuddy from '../../assets/Early-Work/0.png';
import Random from '../../assets/Early-Work/1.png';
import Weather from '../../assets/Early-Work/2.png';
import Contact from '../../components/Pages/contact';


function Early() {
    return(
        <section >
          <section id="earlyWork">
        <div id="projectDiscript">
          <h2>
            Early Work 
          </h2>
          <p>
            These were created early in my coding carrer. Check it out to see how far I have come: 
          </p>
          <p>
          Click on the picture for the deployed application or check out the GitHub Link
        </p>

          <div id="photList">
            <h3 id="underline">RunBuddy</h3>
            <a href="https://auzz24.github.io/Tiny-Tiny/">
            <img src={Runbuddy} style={{width: "40%", height:"40%"}}alt="screenshot of Runbuddy website"/>
            </a>
            <p>This app was made for a figurative Running Club using HTML, and CSS.</p>
            <p id="resumeLink"> <a href="https://github.com/Auzz24/Tiny-Tiny">GITHUB LINK</a></p>
            <h3 id="underline">Random Password Generator</h3>
            <a href="https://auzz24.github.io/random-password/">
            <img src={Random} style={{width: "40%", height:"40%"}}alt="screenshot of Random password website"/>
            </a>
            <p>This app was made to generate a random password for a user using only HTML, CSS, and JavaScript.</p>
            <p id="resumeLink"> <a href="https://github.com/Auzz24/random-password">GITHUB LINK</a></p>
            <h3 id="underline">Weather HQ</h3>
            <a href=" https://auzz24.github.io/WeatherHQ/">
            <img src={Weather} style={{width: "40%", height:"40%"}}alt="screenshot of weather forcast website"/>
            </a>
            <p>This app uses a 3rd party weather api to give the user current weather, a 5 day forcast, and warning when the UV index is too high.</p>
            <p id="resumeLink"> <a href="https://github.com/Auzz24/WeatherHQ">GITHUB LINK</a></p>
            </div>
            </div>
      </section>
      <footer>
  <Contact/>
</footer>
      </section>
    );
}
export default Early; 
