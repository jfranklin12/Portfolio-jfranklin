import "../../App.css";
import React from "react";
import meFooter from "../../images/meFooter.jpg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* name and image */}
          <div className="col-12 col-lg-4 align-self-center p-2">
            <img id="footerPicture" alt="Julian Franklin" src={meFooter} />
            <span id="footerName">Julian Franklin</span>
          </div>
          {/* copy right */}
          <div className="col-12 col-lg-4 align-self-center p-4">
            <small className="ml-2" id="copyright">
              &copy; Designed by Julian Franklin, 2022.
            </small>
          </div>
          {/* icons */}
          <div className="col-12 col-lg-4 align-self-center p-2">
            <a href="https://www.linkedin.com/in/julian-franklin/" target="_blank">
              <i className="fa-brands fa-linkedin fa-2xl p-3" id="footerIcon"></i>
            </a>
            <a href="https://github.com/jfranklin12" target="_blank">
              <i className="fa-brands fa-github fa-2xl p-3" id="footerIcon"></i>
            </a>
            <a href="mailto:j.franks725@gmail.com" target="_blank">
              <i className="fa-regular fa-envelope fa-2xl p-3" id="footerIcon"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
