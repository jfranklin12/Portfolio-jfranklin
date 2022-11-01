import "../../App.css";
import React, { Component } from "react";
import NameAnimation from "../nameAnimation/nameAnimation";
import background from "../../images/background.jpg";

class Header extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
    };
    return (
      <div style={myStyle} className="header">
        <div className="container text-center">
          <h1 id="myName">
            <NameAnimation />
          </h1>
          <h2 id="title">
            Full Stack Web Developer
          </h2>
		  </div>
        </div>
    );
  };
};

export default Header;
