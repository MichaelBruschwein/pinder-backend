import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Finder from './Finder'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches';
import Home from './Home';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      userLoggedIn: false
    }
    this.changeUserStatus = this.changeUserStatus.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }
  changeUserStatus() {
    this.setState({ userLoggedIn: true })
  }
  userLogout() {
    this.setState({ userLoggedIn: false })
  }
  findMatches(){
    axios.get('/finder')
    .then((response)=>{
      console.log(response)
    })
  }
render() {
  return (
    <Router>
      <div className="App">
        <Navbar userStatus={this.state.userLoggedIn} logout={this.userLogout} />
        <Route exact path="/" render={(props) => <Home {...props} userStatus={this.state.userLoggedIn} />} />
        <Route path="/login" render={(props) => <Login {...props} changeStatus={this.changeUserStatus} userStatus={this.state.userLoggedIn} />} />
        <Route path="/register" render={(props) => <Register {...props} userStatus={this.state.userLoggedIn} />} />
        <Route path="/finder" render={(props) => <Finder {...props} userStatus={this.state.userLoggedIn} />} />
        <Route path="/matches" render={(props) => <Matches {...props} userStatus={this.state.userLoggedIn} />} />
      </div>
    </Router>
  );
}
}

export default App;
