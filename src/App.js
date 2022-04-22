import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/Pages/about';
import Early from './components/Pages/early';
import NavTabs from './components/NavTabs';
import Contact from './components/Pages/contact'
import Projects from './components/Pages/projects'

const App = () => {
return(
    <section> 
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <NavTabs/>
        <Route exact path="/">
            <About/>
        </Route>
        <Route exact path="/early">
            <Early/>
        </Route>
        <Route exact path="/projects">
            <Projects/>
            </Route>
        <Route exact path="/contact">
            <Contact/>
        </Route>
        </div>
    </Router>
    </section>
)};

export default App;