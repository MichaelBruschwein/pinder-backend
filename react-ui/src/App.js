import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'
import { BrowserRouter as Router, Route} from "react-router-dom";
import RegistrationForm from './RegistrationForm.js'
import MediaCard from './Matches.js'
import Navbar from './Navbar/Navbar.js';
import ItsAMatch from './ItsAMatch.js';
import Home from './Home.js';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        {/* convention for nameing signin = login */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegistrationForm}/>
        <Route path="/matches" component={MediaCard}/>
        <Route path="/itsAMatch" component={ItsAMatch}/>
      </div>
      </Router> 
    );
  }
}

export default App;
