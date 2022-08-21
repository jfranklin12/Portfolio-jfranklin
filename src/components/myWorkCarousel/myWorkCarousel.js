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
        description: 'Full Stack Web Application'
      },
      {
        image: riverInMountains,
        projectTitle: '360 Degrees #2',
        description: 'Full Stack Web Application #2'
      },
      {
        image: waterfallInCove,
        projectTitle: '360 Degrees #3',
        description: 'Full Stack Web Application #3'
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
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>

        ))

}
      </Carousel>
    );
  }
  
  export default MyWorkCarousel;