import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login.js'
import Register from './Register.js'
import Finder from './Finder.js'
import Navbar from './Navbar/Navbar.js';
import Matches from './Matches.js';
import Home from './Home';


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
