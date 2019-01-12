import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Finder from './Finder'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches';
import Home from './Home';


class App extends Component {
  constructor(){
    super()
    this.state = {
      userLoggedIn:false
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/"render={(props) => <Home {...props} userStatus={this.state.userLoggedIn} />} />
        <Route path="/login" render={(props) => <Login {...props} userStatus={this.state.userLoggedIn} />} />
        <Route path="/register" render={(props) => <Register {...props} userStatus={this.state.userLoggedIn} />}/>
        <Route path="/finder" render={(props) => <Finder {...props} userStatus={this.state.userLoggedIn} />}/>
        <Route path="/matches" render={(props) => <Matches {...props} userStatus={this.state.userLoggedIn} />}/>
      </div>
      </Router>
    );
  }
}

export default App;
