import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from './RegistrationForm.js'
import MediaCard from './Matches.js'
import Navbar from './Navbar/Navbar.js';
import ItsAMatch from './ItsAMatch.js';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        {/* convention for nameing signin = login */}
        <Route path="/Sign-In" component={SignIn} />
        <Route path="/registration/" component={RegistrationForm}/>
        <Route path="/matches" component={MediaCard}/>
        <Route path="/itsAMatch" component={ItsAMatch}/>
      </div>
      </Router> 
    );
  }
}

export default App;
