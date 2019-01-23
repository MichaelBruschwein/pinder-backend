// import React from 'react';
import React, { Component } from "react";
import axios from "axios";

///prevent refresh of page
//make spot in database for url
//require url to be completed

export default class PhotoUploader extends Component {
  //setting the state as null 
  state = { selectedFile: null };
  constructor(props){
    super(props)

    this.uploadHandler=this.uploadHandler.bind(this)
  }
  //re-setting the state with the selected file to be whatever the target file at index 0 is (Whatever file we choose  to upload)
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    // this.uploadHandler();
  };
  uploadHandler = (e) => {
    e.preventDefault()
    //changes form data to a new class
    const formData = new FormData();
    //adding next couple lines to the form data class
    formData.append(
      "profile_pic",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
      //axios call to the backend that posts it to S3 pinder bucket, then pings back as a url response
    const url = axios.post("/imageUpload", formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total);
      }
    }).then((response)=>{
      this.props.getUrl(response.data.url)
    })
  };
  //rendering (and just displaying those parts)
  render() {
    // console.log(this.props)
    return (
      <div>

        <input type="file" onChange={this.fileChangedHandler} />

        <button onClick={this.uploadHandler}>Upload Photo!</button>
        
      </div>
    );
  }
}

