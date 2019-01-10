import React, { Component } from 'react';
import './App.css';

 

export default class Home extends Component {


    
    constructor(props) {
        super(props);
        this.pickRandom = this.pickRandom.bind(this)
        this.state = { random: 0 };
      }
    pickRandom(){
        const min = 1;
        const max = 2;
        const rand = Math.round(min + Math.random() * (max - min));
        
        this.setState({ random: this.state.random + rand });
    }
    componentDidMount(){
        {this.pickRandom()}
    }

    render() {
        
        return (
            <div>
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

