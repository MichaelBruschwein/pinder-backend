import React, { Component } from 'react';
import './Profile.css';
import EditableLabel from 'react-inline-editing';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.userInfo;
        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.composeList = this.composeList.bind(this);
    }
    _handleFocus(key, text) {
        console.log('Focused with text: ' + text);
        console.log(key)
    }

    _handleFocusOut(key, text) {
        // this is where the current state would be sent to axios put
        // also would need to check and see if its for password in which case we double check
        console.log('Left editor with text: ' + text);
        console.log(key)
    }

    deleteProfile() {
        alert("you clicked delete")
    }
    updateProfile() {
        alert("you clicked update")
    }

    composeList() {
        let i = 0;
        let displayValue = ''
        return (
            Object.values(this.state).map(
                (val) => {
                    let key = Object.keys(this.state)[i]
                    i++

                    if (key === 'password') {
                        displayValue = '************';
                    } else {
                        displayValue = val;
                    }

                    if (key === 'id' || key === 'created_at' || key === 'updated_at') {
                        // if you wanted to use these properties you could do so here. but we dont want to display them
                    } else {
                        return (
                            <div>
                                <div className="row">
                                    <div className="column">
                                        <span className="label">{key} </span>
                                        <Divider />
                                    </div>

                                    <div className="column">
                                        <EditableLabel
                                            text={displayValue.toString()}
                                            labelClassName='myLabelClass'
                                            inputClassName='myInputClass'
                                            key inputMaxLength={50}
                                            onFocus={this._handleFocus.bind(this, key)}
                                            onFocusOut={this._handleFocusOut.bind(this, key)}
                                        />
                                        <Divider />
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    return <div></div>
                })
        )

    }
    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else {
            return (
                <div className="container"
                style={{
                    paddingTop: '5%'
                }}>
                    <Card className="card"
                        >
                        {this.composeList()}
                        <Grid container justify="space-between">
                            <Grid item>
                                <Button size="medium" variant="contained" color="primary" onClick={this.updateProfile}>
                                    Update Profile
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size="medium" variant="contained" color="secondary" onClick={this.deleteProfile}>
                                    Delete Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </Card >
                </div >
            )
        } // this is for login redirect
    }

}

