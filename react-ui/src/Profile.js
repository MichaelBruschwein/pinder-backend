import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';
import EditableLabel from 'react-inline-editing'
import FormLabel from '@material-ui/core/FormLabel';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.userInfo;
        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
    }
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        // this is where the current state would be sent to axios post
        console.log('Left editor with text: ' + text);
    }

    render() {
        return (
            <div>
                <div className="inline">
                    <span>Name: </span>
                    <EditableLabel
                        text={this.state.name}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='200px'
                        inputHeight='25px'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="inline">
                    <span>Username: </span>
                <EditableLabel className="form-control" text={this.state.username}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Email: </span>
                <EditableLabel text={this.state.email}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Password: </span>
                <EditableLabel text={this.state.password}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Species: </span>
                <EditableLabel text={this.state.species}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Sex: </span>
                <EditableLabel text={this.state.sex}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>City: </span>
                <EditableLabel text={this.state.city}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>State: </span>
                <EditableLabel text={this.state.state}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Age: </span>
                <EditableLabel text={this.state.age}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                </div>
                <div className="inline">
                    <span>Bio: </span>
                <EditableLabel text={this.state.bio}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                /></div>
            </div>
        )
    }

}

