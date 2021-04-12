import './App.css';
import Projects from './Projects';
import About from './About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CV from './assets/CV2021.pdf';

function Home() {
  return (
  <div style={{backgroundColor:'#22313f', height:'100vh', textAlign:'center'}}>
    <div id='gif'>
      <h1>hi, i'm romane</h1>
    </div>
    <p id='nav'><Link to='/about' id='ab'>ABOUT</Link><span> • </span><Link to='/projects' id='pro'>PROJECTS</Link><span> • </span><a id='cv' href={CV} target='blank'>CV</a> • <a id='git' href='https://github.com/romanecst' target='blank'>GITHUB</a></p>
  </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
