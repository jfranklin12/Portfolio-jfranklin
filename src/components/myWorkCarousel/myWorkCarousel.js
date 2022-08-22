import '../../App.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import degrees from '../../images/degrees.jpg';
import riverInMountains from '../../images/riverInMountains.jpg';
import waterfallInCove from '../../images/waterfallInCove.jpg';

function MyWorkCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    const projects = [
      {
        image: degrees,
        projectTitle: '360 Degrees',
        description: 'Blog for University Degrees',
        github: 'https://github.com/jfranklin12/360-Degrees'

      },
      {
        image: riverInMountains,
        projectTitle: 'Touch Grass',
        description: 'National Park Finder ',
        github: 'https://github.com/jfranklin12/touch-grass-app-national-park-finder'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Team Generator',
        description: 'Generate an HTML for your Work Team',
        github: 'https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Work Day Scheduler',
        description: 'Calendar for Scheduling your Work Day',
        github: 'https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Connect, Learn, Teach',
        description: 'A Tech Blog',
        github: 'https://github.com/jfranklin12/JFranklin-Connect-Learn-Teach'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Social Network API Routers',
        description: 'Backend Routes for a Social Network Application',
        github: 'https://github.com/jfranklin12/Social-Network-API'
      },
    ]

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
        {projects.map(item => (
                  <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.projectTitle}
                  />
                  <Carousel.Caption>
                    <h3>{item.projectTitle}</h3>
                    <h5>{item.description}</h5>
                    <p>{item.techs}</p>
                    <a href={item.github} target="_blank">{item.projectTitle} Github</a>
                  </Carousel.Caption>
                </Carousel.Item>

        ))

}
      </Carousel>
    );
  }
  
  export default MyWorkCarousel;