import '../../../App.css';
import "./resume.css"

import React from 'react';

function Resume() {

  // const resume = () => {
  //   fetch('Julian-Franklin-Resume-2022.pdf').then(response => {
  //     response.blob().then(blob => {
  //       const fileURL
  //     })
  //   })
  // }

    return (
      <div className="resume">
      <div className="container text-center">
        <h1 className="display-3">Resume</h1>
        <div className='row justify-content-center'>
          <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
        <button type="button" className="btn btn-secondary" id="resume-button"><a href={require("./Julian-Franklin-Resume-2022.pdf")} target="_blank" id="link">Download</a></button>
        </div>
        <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
        <button type="button" className="btn btn-secondary" id="resume-button"><a href="https://docs.google.com/document/d/e/2PACX-1vRAdVBQb3NFSHbAfO44nRmUjiaCxp3HrJeoWRK96LFjpwL-zfSltaIEHXeQw88esA8PDX8JRI41OISM/pub" target="_blank" id="link">View Online</a></button>
        </div>
        </div>
        <br></br><br></br>
        <div className='row justify-content-center'>
        <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
        <button type="button" className="btn btn-secondary" id="resume-button"><a href={require("./GT-Certificate.pdf")} target="_blank" id="link">Georgia Tech Certificate</a></button>
        </div>
        </div>  
      </div>
      </div>
    );
  }
  
  export default Resume;