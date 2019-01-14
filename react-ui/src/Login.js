import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from "react-router-dom";
import axios from "axios"
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.classes = props;
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit() {
    axios.post('/handleLogin', {
      email: this.state.email,
      password: this.state.password,
    }).then(function (response) {
      if (response.data === "user not found") {
        console.log('user not found')
      } else if (response.data === "password did not match") {
        alert("Password did not match please try again")
      } else {
        this.props.changeStatus()
        // this.setState({ email: "", password: "" })
      }
    }.bind(this))
      .catch((error) => {
        console.log(error)
        alert("Error: User not found please check your credentials")
      })
  }
  render() {
    if (this.props.userStatus === true) {
      return <Redirect to='/finder' />
    } else {
      return (
        <main className={this.props.classes.main}>
          <CssBaseline />
          <Paper className={this.props.classes.paper}>
            <Avatar className={this.props.classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={this.props.classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" onChange={this.handleChange('email')} name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" onChange={this.handleChange('password')} type="password" id="password" autoComplete="current-password" />
              </FormControl>
              {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.props.classes.submit}
                onClick={this.handleSubmit}
              >
                Sign in
          </Button>
              <Link to="/register">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.props.classes.submit}
                >
                  Not a Member? Click Here to Register
          </Button>
              </Link>
            </form>
          </Paper>
        </main>
      );
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);