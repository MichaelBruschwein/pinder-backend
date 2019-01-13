import React from 'react';
import { Redirect } from 'react-router-dom'


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props
    }

    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}
