import '../../App.css';
import React from 'react';
import meFooter from '../../images/meFooter.jpg';

function MyNavbar({ currentPage, handlePageChange }) {

  return (
    <nav className="navbar navbar-expand-lg bg-light" id="myNavbar">
      <div className="container-fluid" id="myNav">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            className="navbar-brand"
          >
            <img id="footerPicture" alt="Julian Franklin" src={meFooter} />
          </a>
        
        <button
          className="navbar-toggler"
          id="navbarButton"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              id="navLinks"
            >
              About Me
            </a>
            </li>
            <li className="nav-item">
            <a
              href="#MyWork"
              onClick={() => handlePageChange("MyWork")}
              className={
                currentPage === "MyWork" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              id="navLinks"
            >
              My Work
            </a>
            </li>
            <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              id="navLinks"
            >
              Contact
            </a>
            </li>
            <li className="nav-item">
            <a
              href="#link"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              id="navLinks"
            >
              Resume
            </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;