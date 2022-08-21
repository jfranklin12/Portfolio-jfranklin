import '../../../App.css';
import './myWork.css';
import React from 'react';
import MyWorkCarousel from '../../myWorkCarousel/myWorkCarousel';

function MyWork() {


  return (
    <div className="myWork">
    <div className="container text-center">
      <h1 className="display-3">My Work</h1>
      <MyWorkCarousel />
      </div>
    </div>
    
  );
}

export default MyWork;