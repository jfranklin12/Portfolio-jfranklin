import "../../App.css";
import React, { Component } from "react";
import NameAnimation from "../nameAnimation/nameAnimation";
import background1 from "../../images/background1.jpg";

class Header extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background1})`,
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
    };
    return (
      <div style={myStyle} className="header">
        <div className="container text-center">
          <h1 id="myName">
            <NameAnimation />
          </h1>
		  </div>
        </div>
    );
  };
};

export default Header;
