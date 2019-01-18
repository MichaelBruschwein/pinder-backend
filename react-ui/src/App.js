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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {green,blue,red} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      type:'light',
      primary: green,
      secondary: blue,
    },
  });
class App extends Component {
  constructor() {
    super()
    this.rememberMe = localStorage.getItem('remember_me')
    this.rememberMe = JSON.parse(this.rememberMe)
    if(this.rememberMe === null){
      this.state = {
        userLoggedIn:false,
        user:{}
      }
    }else{ //the user is logged in
      this.state = {
        userLoggedIn:true,
        user:this.rememberMe.user
      }
    }
    this.userLogin = this.userLogin.bind(this)
    this.userLogout = this.userLogout.bind(this)
  }
  userLogin(userData) {
    var testObject = {
      token: userData.access_token.token,
      user: userData.user
    };
    localStorage.setItem('remember_me', JSON.stringify(testObject));

    this.setState({
      userLoggedIn: true,
      user: userData.user,
      token: userData.access_token.token
    })
  }
  userLogout() {
    localStorage.clear();
    this.setState({
      token: "",
      userLoggedIn: false,
      user: {}
    })
  }
  render() {
      
      return (
        <Router>
          <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar userStatus={this.state.userLoggedIn} logout={this.userLogout} />
            <Route exact path="/" render={(props) => <Home {...props} userStatus={this.state.userLoggedIn} />} />
            <Route path="/login" render={(props) => <Login {...props} changeStatus={this.userLogin} userStatus={this.state.userLoggedIn} />} />
            <Route path="/register" render={(props) => <Register {...props} userStatus={this.state.userLoggedIn} />} />
            <Route path="/finder" render={(props) => <Finder {...props} matches={this.state.user} userStatus={this.state.userLoggedIn} />} />
            <Route path="/profile" render={(props) => <Profile {...props} userLogout={this.userLogout} userStatus={this.state.userLoggedIn} userInfo={this.state.user} />} />
            <Route path="/matches" render={(props) => <Matches {...props} userStatus={this.state.userLoggedIn} />} />
            </MuiThemeProvider>
          </div>
        </Router>
      );
  }
}

export default App;
