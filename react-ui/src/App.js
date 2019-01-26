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

// const theme = createMuiTheme({
//   typography: {
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// });

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar/>
            {/* use profile to manage login */}
            <Route exact path="/" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/finder" component={Finder}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/matches" component={Matches}/>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
