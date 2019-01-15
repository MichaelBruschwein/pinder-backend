import React, { Component } from 'react';
import './Profile.css';
import EditableLabel from 'react-inline-editing';
import { Redirect } from 'react-router-dom';

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
        // this is where the current state would be sent to axios put
        console.log('Left editor with text: ' + text);
    }
    composeList() {
        let i = 0;
        return (
            Object.values(this.state).map(
                (val) => {
                    var key = Object.keys(this.state)[i]
                    i++

                    return (
                        <div className="item">
                            <span className="label">{key} </span>
                            <EditableLabel
                                text={val}
                                labelClassName='myLabelClass'
                                inputClassName='myInputClass'
                                inputWidth='100%'
                                inputHeight='100%'
                                inputMaxLength={50}
                                onFocus={this._handleFocus}
                                onFocusOut={this._handleFocusOut}
                            />
                        </div>
                    )
                })
        )

    }
    render() {
        if (!this.props.userStatus) {
            return <Redirect to='/login' />
        } else {
            return (
                <div className="container">
                    {this.composeList()}
                </div>
            )
        }
    }

}

