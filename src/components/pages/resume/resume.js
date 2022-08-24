import '../../../App.css';
import "./resume.css"
import React from 'react';

function Resume() {


    return (
      <div className="resume">
      <div className="container text-center">
        <h1 className="display-3">Resume</h1>
        <div className='row justify-content-center'>
          <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
        <button type="button" class="btn btn-secondary" id="resume-button">Download PDF</button>
        </div>
        <div className="col-6 col-sm-5 col-lg-4 col-xl-3">
        <button type="button" class="btn btn-secondary" id="resume-button">View Online</button>
        </div>
        </div>  
      </div>
      </div>
    );
  }
  
  export default Resume;