// import React from 'react';
import React, { Component } from 'react';

export default class PhotoUploader extends Component {
  render() {
    return (
      <div>
      <input type="file" onChange={this.fileChangedHandler}>
      </input>
      <button onClick={this.uploadHandler}>Upload!</button>
      </div> 
    );
  }
}

