import React, { Component } from 'react';
import './Profile.css';
import EditableLabel from 'react-inline-editing';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Dialog from './../Dialog.js';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.userInfo,
            open: false,
        }

        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.composeList = this.composeList.bind(this);
    }

    _handleFocus(key, text) {
        console.log('Focused on ' + key + ' which contains ' + text);
    }

    _handleFocusOut(key, text) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [key]: text
            }
        }))
        this.props.updateState(this.state)
    }

    deleteProfile(user) {
        axios.delete(`/deleteUser/${user.id}`, {})
            .then((response) => {
                this.props.userLogout()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateProfile(user) {
        axios.put(`/updateUser/${user.id}`, {
            username: user.username,
            email: user.email,
            password: user.password,
            name: user.name,
            species: user.species,
            sex: user.sex,
            city: user.city,
            state: user.state,
            age: user.age,
            bio: user.bio
        })
            .then((response) => {
                console.log('Updated Profile')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    composeList() {
        let i = 0;
        let displayValue = ''
        return (
            Object.values(this.state.user).map(
                (val) => {
                    let key = Object.keys(this.state.user)[i]
                    i++

                    if (key === 'password') {
                        displayValue = '************';
                    } else {
                        displayValue = val;
                    }
                    // Emit the following keys
                    if (key === 'id' || key === 'created_at' || key === 'updated_at') {
                        // if you wanted to use these properties you could do so here. but we dont want to display them
                    } else {
                        return (
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
                    style={{ paddingTop: '5%' }}>
                    <Card className="card">
                        {this.composeList()}
                        <Grid container justify="space-between">
                            <Grid item>
                                <Dialog
                                    buttonName={'Delete Profile'}
                                    buttonType={'primary'}
                                    title={'Delete Profile'}
                                    dialog={'Are you sure you want to Delete Your Profile? This cannot be Undone!'}
                                    confirm={'Delete'} deny={'Cancel'}
                                    action={this.deleteProfile}
                                    user={this.state.user}
                                />
                            </Grid>
                            <Grid item>
                                <Dialog
                                    buttonName={'Update Profile'}
                                    buttonType={'secondary'}
                                    title={'Update Profile'}
                                    dialog={'Are you sure you want to Update Your Profile?'}
                                    confirm={'Update'}
                                    deny={'Cancel'}
                                    action={this.updateProfile}
                                    user={this.state.user}
                                />
                            </Grid>
                        </Grid>
                    </Card >
                </div >
            )
        }
    }
}

