import '../../App.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import mistyLakeForest from '../../images/mistyLakeForest.jpg';
import riverInMountains from '../../images/riverInMountains.jpg';
import waterfallInCove from '../../images/waterfallInCove.jpg';

function MyWorkCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    const projects = [
      {
        image: mistyLakeForest,
        projectTitle: '360 Degrees',
        description: 'Blog for Reviewing your University Degree',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/360-Degrees'

      },
      {
        image: riverInMountains,
        projectTitle: 'Touch Grass',
        description: 'National Park Finder Application',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/touch-grass-app-national-park-finder'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Team Generator',
        description: 'Generate an HTML for your Work Team',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Work Day Scheduler',
        description: 'Calendar for Scheduling your Work Day',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Connect, Learn, Teach',
        description: 'A Tech Blog',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/JFranklin-Connect-Learn-Teach'
      },
      {
        image: waterfallInCove,
        projectTitle: 'Social Network API Routers',
        description: 'Backend Routes for a Social Network Application',
        techs: 'JavaScript',
        github: 'https://github.com/jfranklin12/Social-Network-API'
      },
    ]

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {projects.map(item => (
                  <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.projectTitle}</h3>
                    <h6>{item.description}</h6>
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