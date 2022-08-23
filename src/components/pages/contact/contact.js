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
      setErrorMessage(`Thank you ${name}! I'll be in touch soon!`);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  const testInput = () => {
    if (!name) {
      setErrorMessage("Please enter your name");
      return;
    }
    else if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }
    else if (!message) {
      setErrorMessage("Please enter a message");
      return;
    }
  }

  return (
    <section className="contact">
      <div className="container text-center">
        <h1 className="display-3">Contact Me!</h1>

        <form className="form">
          <h2>Let's connect!</h2>
          <h3>Send me a message, and I'll reach out to you!</h3>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  onBlur={testInput}
                  type="text"
                  className="form-control"
                  id="inputName"
                ></input>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="inputEmail"
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>
            SUBMIT
          </button>
        </form>
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
