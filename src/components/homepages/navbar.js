import "../../App.css";
import React from "react";

function MyNavbar({ currentPage, handlePageChange }) {
  return (
    <div id="myNavbar" className="sticky-top">
      <nav className="navbar navbar-expand">

          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item  navbar-text">
                <a
                  href="#AboutMe"
                  onClick={() => handlePageChange("AboutMe")}
                  id={currentPage === "AboutMe" ? "active" : "navLinks"}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item  navbar-text">
                <a
                  href="#MyWork"
                  onClick={() => handlePageChange("MyWork")}
                  id={currentPage === "MyWork" ? "active" : "navLinks"}
                >
                  My Work
                </a>
              </li>
              <li className="nav-item navbar-text">
                <a
                  href="#Contact"
                  onClick={() => handlePageChange("Contact")}
                  id={currentPage === "Contact" ? "active" : "navLinks"}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item  navbar-text">
                <a
                  href="#link"
                  onClick={() => handlePageChange("Resume")}
                  id={currentPage === "Resume" ? "active" : "navLinks"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default MyNavbar;
