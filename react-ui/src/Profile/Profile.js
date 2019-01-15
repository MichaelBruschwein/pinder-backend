import React, { Component } from 'react';
import './Profile.css';
import EditableLabel from 'react-inline-editing'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.userInfo;
        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
        this.composeList = this.composeList.bind(this);
    }
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        // this is where the current state would be sent to axios post
        console.log('Left editor with text: ' + text);
    }
    composeList() {
        // Object.keys
        let i = 0;
        let arrKey = [];
        let arrVal = [];

        Object.values(this.state).forEach(
            (val) => {
                var key = Object.keys(this.state)[i]
                console.log(key,val)
                arrKey.push(key)
                arrVal.push(val)
                i++
            }
        )
    }
    render() {
        this.composeList();
        return (
            <div className="container">
                <div className="item">
                    <span className="label">Name: </span>
                    <EditableLabel
                        text={this.state.name}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Username: </span>
                    <EditableLabel text={this.state.username}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>

                <div className="item">
                    <span className="label">Email: </span>
                    <EditableLabel text={this.state.email}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Password: </span>
                    <EditableLabel text={this.state.password}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Species: </span>
                    <EditableLabel text={this.state.species}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Sex: </span>
                    <EditableLabel text={this.state.sex}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">City: </span>
                    <EditableLabel text={this.state.city}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">State: </span>
                    <EditableLabel text={this.state.state}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Age: </span>
                    <EditableLabel text={this.state.age}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    />
                </div>
                <div className="item">
                    <span className="label">Bio: </span>
                    <EditableLabel text={this.state.bio}
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        inputWidth='100%'
                        inputHeight='100%'
                        inputMaxLength={50}
                        onFocus={this._handleFocus}
                        onFocusOut={this._handleFocusOut}
                    /></div>
            </div>
        )
    }

}

