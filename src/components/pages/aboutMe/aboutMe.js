import '../../../App.css';
import './aboutMe.css';
import React from 'react';
import myHeadshot from '../../../images/myHeadshot.jpeg'

function AboutMe() {
  return (
    <section className='aboutMe'>
      <div className='container text-center' id='aboutMeSection'>
        <h1 className="display-3">About Me</h1>
            <img src={myHeadshot} alt="My Picture" id="myHeadshot"></img>
        <p className="lead">
        Mission-oriented full stack web developer leveraging education background to build a functional and seamless developer to user experience. Recently earned a full stack web development certificate from Georgia Institute of Technology excelling in newly developed skills in JavaScript, CSS, React.js and responsive web design. Known as an revolutionary problem solver passionate about developing detail-oriented, innovative apps that focus on mobile-first design and development. In projects, my goal is to create an app that excites users through its state of the art technology and flawless experience. I worked on a team of four to develop a single-page MERN app that allows individuals to connect, place and accept bids for contract web development jobs. I was able to implement my newly developed database skills in MongoDB to create a database that functioned through React and Heroku. I’m thrilled to exceed expectations by working in an agile environment driven by collaboration, efficiency and determination to build extraordinary web experiences.
          </p>
      </div>
    </section>

  );
}

            export default AboutMe;