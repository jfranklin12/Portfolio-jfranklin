import "../../../App.css";
import "./contact.css";
import React, { useState } from "react";
import { validateEmail } from '../../../utils/helpers.js';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in the missing field!");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    } else {
      setErrorMessage(`Thank you, ${name}! I'll be in touch soon!`);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const emptyInput = () => {
    if (!name) {
      setErrorMessage("Please fill in your name.");
      return;
    }
    else if (!email) {
      setErrorMessage("Please fill in your email.")
    }
    else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
  }
    else if (!message) {
    setErrorMessage("Please fill in a message.");
    return;
}
  }

  return (
    <section className="contact">
      <div className="container text-center">
        <h1 className="display-3">Contact Me!</h1>

        <form className="form" action="https://formsubmit.co/j.franks725@gmail.com" method="POST" target="_blank">
          <h2>Let's connect!</h2>
          <h3>Send me a message, and I'll reach out to you!</h3>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  onBlur={emptyInput}
                  type="text"
                  className="form-control"
                  id="input"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur={emptyInput}
                  type="email"
                  className="form-control"
                  id="input"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  onBlur={emptyInput}
                  type="text"
                  className="form-control"
                  id="input"
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
            SUBMIT
          </button>
        </form>
        <br></br>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
