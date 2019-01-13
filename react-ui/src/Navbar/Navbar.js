import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // this.classes = props;
  // }
  changeLoginOrLogout(){
    if(!this.props.userStatus){
      return <Link to="/login" ><Button color="inherit">Login</Button></Link>
    }else{
      return <Link to="/login" ><Button onClick={this.props.logout} color="inherit">Logout</Button></Link>
    }
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/"><Button variant="contained" color="secondary">Pinder</Button></Link>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
            </Typography>
            <Link to="/finder"><Button color="inherit">Finder</Button></Link>
            <Link to="/matches"><Button color="inherit">Matches</Button></Link>
            <Link to="/profile"><Button color="inherit">Profile</Button></Link>
            <Link to="/register"><Button color="inherit">Register</Button> </Link>
            {this.changeLoginOrLogout()}
            {/* <Link to="/login" ><Button color="inherit">Login / Logout</Button></Link> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
