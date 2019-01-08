import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
  container: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  menu: {
    width: 200,
  },
});
const sex = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    }
  ];
  
class TextFields extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            username:'',
            email:'',
            confirm_email:'',
            password:'',
            confirm_password:'',
            species:'',
            sex:'',
            location:'',
            age:0,
            bio:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit(){
      console.log(this.state)
      this.setState({
            name: '',
            username:'',
            email:'',
            confirm_email:'',
            password:'',
            confirm_password:'',
            species:'',
            sex:'',
            city:'',
            state:'',
            age:0,
            bio:''
      })
      console.log(this.state)
  }
  

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <Card>
        <CardContent>
        <TextField
          id="Name"
          label="Name (ex. John Doe)"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        </CardContent>
        <TextField
          id="Username"
          label="Username (ex. DogLover77)"
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <TextField
          id="Email"
          label="Email (ex. John@gmail.com)"
          value={this.state.email}
          onChange={this.handleChange('email')}
          type="email"
          margin="normal"
        />
        <TextField
          id="Email-Confirmation"
          label="Confirm Email"
          value={this.state.confirm_email}
          onChange={this.handleChange('confirm_email')}
          type="email"
          margin="normal"
        />
        <TextField
          id="Password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          type="password"
          margin="normal"
        />
        <TextField
          id="Password-Confirmation"
          label="Confirm Password"
          value={this.state.confirm_password}
          onChange={this.handleChange('confirm_password')}
          type="password"
          margin="normal"
        />
        <TextField
          id="Species"
          label="Species (ex. Cat)"
          value={this.state.species}
          onChange={this.handleChange('species')}
          type="text"
          margin="normal"
        />
        <TextField
          id="Sex"
          select
          label="Sex"
          value={this.state.sex}
          onChange={this.handleChange('sex')}
          margin="normal"
          >
          {sex.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="City"
          label="City (ex. Bozeman)"
          value={this.state.city}
          onChange={this.handleChange('city')}
          margin="normal"
        />
        <TextField
          id="State"
          label="State (ex. MT)"
          value={this.state.state}
          onChange={this.handleChange('state')}
          margin="normal"
        />
        <TextField
          id="Age"
          label="Age of Pet"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          margin="normal"
        />
        <TextField
          id="Bio"
          label="Bio (Limit 500 Characters)"
          value={this.state.bio}
          onChange={this.handleChange('bio')}
          type="text"
          margin="normal"
          multiline
          fullWidth
        />
        <Button
            // type="click"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          </Card>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
