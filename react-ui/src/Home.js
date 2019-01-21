import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'


export default class Home extends Component {

    render() {
        if (true) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                
            </div>

        );
    }
}

