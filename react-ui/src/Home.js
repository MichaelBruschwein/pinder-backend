import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'


export default class Home extends Component {

    constructor(props) {
        super(props);
        //the lower two lines would be changed to represent a process of determining if a user is logged in or not
        this.pickRandom = this.pickRandom.bind(this)
        this.state = { random: 0 };
    }
    //testing function that would pick a random number to effect reroute
    pickRandom() {
        const min = 1;
        const max = 2;
        const rand = Math.round(min + Math.random() * (max - min));

        this.setState({ random: this.state.random + rand });
    }
    componentDidMount() {
        //call the random number generator for the reroute temp function
        this.pickRandom()
        
    }

    render() {
        //the next line would need to be changed to check and see if user is logged in
        if (this.state.random === 1) {
            return <Redirect to='/login' />
        }else if(this.state.random === 2) {
            return <Redirect to='/finder' />
        }
        return (
            <div>
                {/* Athentication Adonis
                
                */}
                {/* check for cookies
                    if cookies exist
                    check if user is logged in
                    if user is logged in change route to finder
                    if user is not logged in change route to login
                    */}
                {/* since we dont have a login yet lets randomly choose one or the other on loadin */}
                {/* can random work within react */}

                <div>The number is: {this.state.random}</div>

            </div>
            
        );
    }
}

