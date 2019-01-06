import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn.js'
import ButtonAppBar from './Top-Bar.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from './RegistrationForm.js'
import Login from './login.js'
import PetFinder from './petFinder.js'
import Matches from './matches.js'
import Home from './home.js'


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ButtonAppBar/>
        {/* convention for nameing signin = login */}
        <Route path="/Sign-In" component={SignIn} />
        <Route path="/registration/" component={RegistrationForm}/>
        <Route path="/login/" component={Login}/>
        <Route path="/petFinder/" component={PetFinder}/>
        <Route path="/matches/" component={Matches}/>
        <Route path="/" component={Home}/>
      </div>
      </Router>
    );
  }
}

