import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login/Login.js'
import Register from './Register/Register.js'
import Finder from './Finder/Finder.js'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches/Matches.js';
import Profile from './Profile/Profile.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'ff1a8c',
      main: '#009688',
      dark: '339ba5',
      contrastText: '#000',
    },
    secondary: {
      light: '#005b64',
      main: '#ff3385',
      dark: '#ff9d00',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  constructor() {
    super()
    this.rememberMe = localStorage.getItem('remember_me')
    this.rememberMe = JSON.parse(this.rememberMe)
    if (this.rememberMe === null) {
      this.state = {
        userLoggedIn: false,
        user: {}
      }
    } else { //the user is logged in
      this.state = {
        userLoggedIn: true,
        user: this.rememberMe.user
      }
    }
    this.userLogin = this.userLogin.bind(this)
    this.userLogout = this.userLogout.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState(userData) {
    this.setState(prevState => (
      {
        ...prevState,
        user: { userData }
      }
    ))

  }

  userLogin(userData) {
    var testObject = {
      token: userData.access_token.token,
      user: userData.user
    };
    localStorage.setItem('remember_me', JSON.stringify(testObject));
    this.updateState(userData) // broken out into a seperate function so it can be used to set state from other components
    this.setState({
      userLoggedIn: true,
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
            <Route exact path="/" render={(props) => <Login {...props} userLogin={this.userLogin}  userStatus={this.state.userLoggedIn} />} />
            <Route path="/login" render={(props) => <Login {...props} userLogin={this.userLogin} userStatus={this.state.userLoggedIn} />} />
            <Route path="/register" render={(props) => <Register {...props} userStatus={this.state.userLoggedIn} />} />
            <Route path="/finder" render={(props) => <Finder {...props} matches={this.state.user} userStatus={this.state.userLoggedIn} />} />
            <Route path="/profile" render={(props) => <Profile {...props} userLogout={this.userLogout} updateState={this.updateState} userStatus={this.state.userLoggedIn} userInfo={this.state.user} />} />
            <Route path="/matches" render={(props) => <Matches {...props} userStatus={this.state.userLoggedIn} />} />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
