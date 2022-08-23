import '../../../App.css';
import './contact.css'
import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <div className="container text-center">
        <h1 className="display-3">Contact Me!</h1>

        <form>
          <h2>Let's connect!</h2>
          <h3>Send me a message, and I'll reach out to you!</h3>
            <div className='row justify-content-center'>
            <div className='col-12 col-md-8'>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            </div>
          <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
      </div >
      

    </section >

  );
}

export default Contact;