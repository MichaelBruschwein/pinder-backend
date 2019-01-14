import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import EditableLabel from 'react-inline-editing'
import FormLabel from '@material-ui/core/FormLabel';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state=this.props.userInfo;
        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
    }
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }

    render() {
        return (
            
            <div>
                
                <EditableLabel text={this.state.name}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                >
                <FormLabel labelPlacement='top'>Hello</FormLabel>
                <EditableLabel text={this.state.username}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.email}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.password}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.species}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.sex}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.city}
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputWidth='200px'
                inputHeight='25px'
                inputMaxLength='50'
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            />
            <EditableLabel text={this.state.state}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.age}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
                <EditableLabel text={this.state.bio}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
            </div>
        )
    }

}

