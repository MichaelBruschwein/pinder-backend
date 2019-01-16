// import React from 'react';
import React, { Component } from "react";
import axios from "axios";
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

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
    axios.post("http://res.cloudinary.com/demo/image/upload/", formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total);
      }
    });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload Photo!</button>

        {/* Potentially below is an upload preset func but maybe not ? */}
        {/* <script type="text/javascript">
    var generateSignature = function(callback, params_to_sign){
      $.ajax({
       url     : "http://localhost:3001/register",
       type    : "GET",
       dataType: "text",
       data    : { data: params_to_sign},
       complete: function() {console.log("complete")},
       success : function(signature, textStatus, xhr) { callback(signature); },
       error   : function(xhr, status, error) { console.log(xhr, status, error); }
      })
    }
  </script>
         */}
        {/*         
        <Image cloudName="abcm2019mcba" publicId="Pinderrrr" width="300" crop="scale" />
        <CloudinaryContext cloudName="demo">
  
    <Image publicId="Pinderrroni" width="50" />
  
  <Image publicId="sample" width="0.5" />
</CloudinaryContext> */}
      </div>
    );
  }
}

//Cute little widget.

// function showUploadWidget() {
//   PhotoUploader.openUploadWidget(
//     {
//       cloudName: "abcm2019mcba",
//       uploadPreset: "hhblxxm0",
//       sources: [
//         "local",
//         "url",
//         "camera",
//         "image_search",
//         "facebook",
//         "dropbox",
//         "instagram"
//       ],
//       googleApiKey: "<image_search_google_api_key>",
//       showAdvancedOptions: true,
//       cropping: true,
//       multiple: false,
//       defaultSource: "local",
//       styles: {
//         palette: {
//           window: "#000000",
//           sourceBg: "#000000",
//           windowBorder: "#8E9FBF",
//           tabIcon: "#FFFFFF",
//           inactiveTabIcon: "#8E9FBF",
//           menuIcons: "#2AD9FF",
//           link: "#08C0FF",
//           action: "#336BFF",
//           inProgress: "#00BFFF",
//           complete: "#33ff00",
//           error: "#EA2727",
//           textDark: "#000000",
//           textLight: "#FFFFFF"
//         },
//         fonts: {
//           default: null,
//           "'Acme', sans-serif": {
//             url: "https://fonts.googleapis.com/css?family=Acme",
//             active: true
//           }
//         }
//       }
//     },
//     (err, info) => {
//       if (!err) {
//         console.log("Upload Widget event - ", info);
//       }
//     }
//   );
// }
