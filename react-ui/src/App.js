import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from './Register'
import Finder from './Finder'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches';
import Home from './Home.js';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/finder" component={Finder}/>
        <Route path="/matches" component={Matches}/>
      </div>
      </Router>
    );
  }
}

export default App;
