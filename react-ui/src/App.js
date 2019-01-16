import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Finder from './Finder'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches';
import Home from './Home';
// import axios from 'axios'
import Profile from './Profile/Profile';


class App extends Component {
  constructor() {
    super()
    this.state = {
      userLoggedIn: false,
      user: {
        id: '0',
        name: 'testname',
        username: 'testusername',
        email: 'test@test.com',
        password: 'pass',
        species: 'Dog',
        sex: 'Male',
        city: 'boz',
        state: 'montana',
        age: '3',
        bio: 'Hello World',
        created_at: '12-12',
        updated_at: '12-12'
      }
    }
    this.userLogin = this.userLogin.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }
  userLogin(userData) {
    var testObject = {token:userData.access_token.token};
    // Put the object into storage
    localStorage.setItem('token', JSON.stringify(testObject.token));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('token');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
    this.setState({
      userLoggedIn: true,
      user: userData.user,
      token: userData.access_token.token
    })
  }
  //   axios.get('/findPets', {
  //     params: {
  //       sex: userData.sex
  //     }
  //   })
  //     .then((response) => {
  //       this.setState({
  //         userMatches: response.data,
  //         userLoggedIn: true,
  //         user: userData
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  userLogout() {
    localStorage.clear();
    this.setState({
      token:"",
      userLoggedIn: false,
      user: {
        // name: 'testname',
        // username: 'testusername',
        // email: 'test@test.com',
        // password: 'pass',
        // species: 'Dog',
        // sex: 'Male',
        // city: 'boz',
        // state: 'montana',
        // age: '3',
        // bio: 'Hello World'
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar userStatus={this.state.userLoggedIn} logout={this.userLogout} />
          <Route exact path="/" render={(props) => <Home {...props} userStatus={this.state.userLoggedIn} />} />
          <Route path="/login" render={(props) => <Login {...props} changeStatus={this.userLogin} userStatus={this.state.userLoggedIn} />} />
          <Route path="/register" render={(props) => <Register {...props} userStatus={this.state.userLoggedIn} />} />
          <Route path="/finder" render={(props) => <Finder {...props} matches={this.state.userMatches} userStatus={this.state.userLoggedIn} />} />
          <Route path="/profile" render={(props) => <Profile {...props} userStatus={this.state.userLoggedIn} userInfo={this.state.user} />} />
          <Route path="/matches" render={(props) => <Matches {...props} userStatus={this.state.userLoggedIn} />} />
        </div>
      </Router>
    );
  }
}

export default App;
