import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn.js'
import ButtonAppBar from './Top-Bar.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from './RegistrationForm.js'
import MediaCard from './Matches.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ButtonAppBar/>
        {/* convention for nameing signin = login */}
        <Route path="/Sign-In" component={SignIn} />
        <Route path="/registration/" component={RegistrationForm}/>
        <Route path="/matches" component={MediaCard}/>
      </div>
      </Router> 
    );
  }
}

export default App;
