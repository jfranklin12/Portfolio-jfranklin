import '../../../App.css';
import './contact.css'
import React from 'react';

function Contact() {
  return (
    <section className='contact'>
      <div className='container text-center'>
        <h1 className="display-3">Contact Me!</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Email</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Message</label>
            <textarea clasNames="form-control" aria-label="With textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </section>

  );
}

export default Contact;