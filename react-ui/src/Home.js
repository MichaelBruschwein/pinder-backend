import React, { Component } from 'react';
import './App.css';


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

export default class Home extends Component {
    render() {
        return (
            <div>
                Hello
          </div>
                  );
    }
}

