import React from 'react';
import Runbuddy from '../../assets/Early-Work/0.png';
import Random from '../../assets/Early-Work/1.png';
import Weather from '../../assets/Early-Work/2.png';
import Contact from '../../components/Pages/contact';

function Early() {
    return(
        <section >
          <section id="earlyWork">
        <div>
          <h2>
            Early Work 
          </h2>
          <p>
            These were created by Austin early in his coding carrer. Check it out to see how far he has come: 
          </p>
          <div id="photList">
            <h3>RunBuddy</h3>
            <a href="https://auzz24.github.io/Tiny-Tiny/">
            <img src={Runbuddy} style={{width: "15%"}} alt="screenshot of Runbuddy website"/>
            </a>
            <p>This app was made for a figurative Running Club using HTML, and CSS</p>
            <h3>Random Paswod generator</h3>
            <a href="https://auzz24.github.io/random-password/">
            <img src={Random} style={{width: "15%"}} alt="screenshot of Random password website"/>
            </a>
            <p>This app was made to generate a random password for a user using only HTML, CSS, and JavaScript</p>
            <h3>Weather HQ</h3>
            <img src={Weather} style={{width: "15%"}} alt="screenshot of weather forcast website"/>
            <p>This app uses a 3rd party weather api to give the user current weather and a 5 day forcast</p>
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
