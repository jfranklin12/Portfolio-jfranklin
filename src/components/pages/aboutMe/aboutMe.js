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
          I am thrilled to announce my long-awaited career transformation into web development has begun! My name is Julian Franklin. For the last seven years, I have been a top-notch, highly recognized, elementary school educator. Now, as I commence this new chapter, it is important to hold tight to the joy and success I have experienced in education. By leveraging my aptitude for creativity, organization, planning, agility, and perfection, I know I will continue to produce exceptional products just like I did in education. I am excited to learn and apply the skills Georgia Tech will develop in me as a Software Engineer.
          <br></br><br></br>
          It is my drive for learning and growing that has inspired this new adventure. And what an adventure it has been already! Every day I become more fluent in HTML development, using CSS and JavaScript, getting to put my creativity to the test. There is no doubt over the next few months, Georgia Tech’s program, combined with my persistence, will forge me into a talented software engineer.
          <br></br><br></br>
          I am looking forward to contributing my unique skills to a team of like-minded, passionate professionals!
          </p>
      </div>
    </section>

  );
}

            export default AboutMe;