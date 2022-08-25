import "../../App.css";
import React from "react";
import meFooter from "../../images/meFooter.jpg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* name and image */}
          <div className="col align-self-center">
            <img id="footerPicture" alt="Julian Franklin" src={meFooter} />
            <span id="footerName">Julian Franklin</span>
          </div>
          {/* copy right */}
          <div className="col align-self-center">
            <small className="ml-2" id="copyright">
              &copy; Designed by Julian Franklin, 2022.
            </small>
          </div>
          {/* icons */}
          <div className="col align-self-center">
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin fa-2xl p-3" id="footerIcon"></i>
            </a>
            <a href="#" target="_blank">
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
