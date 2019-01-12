// import React from 'react';
import React, { Component } from "react";
import axios from "axios";

export default class PhotoUploader extends Component {
  state = { selectedFile: null };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    console.log(this.state.selectedFile);
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    axios.post("my-domain.com/file-upload", formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total);
      }
    });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}
