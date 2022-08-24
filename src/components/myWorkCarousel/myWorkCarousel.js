import "../../App.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import degrees from "../../images/degrees.jpg";
import waterfall from "../../images/waterfall.jpg";
import team from "../../images/team.jpg";
import work from "../../images/work.jpg";
import blog from "../../images/blog.jpg";
import social from "../../images/social.jpg";
import { Github } from 'react-bootstrap-icons';

function MyWorkCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const projects = [
    {
      id: 1,
      image: degrees,
      projectTitle: "360 Degrees",
      description: "Blog for University Degrees",
      github: "https://github.com/jfranklin12/360-Degrees",
      website: "https://threesixtydegrees.herokuapp.com/"
    },
    {
      id: 2,
      image: waterfall,
      projectTitle: "Touch Grass",
      description: "National Park Finder ",
      github:
        "https://github.com/jfranklin12/touch-grass-app-national-park-finder",
        website: "https://ashley1thompson.github.io/touch-grass-app-national-park-finder/"
    },
    {
      id: 3,
      image: team,
      projectTitle: "Team Generator",
      description: "Generate an HTML for your Work Team",
      github:
        "https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator",
      website: "https://drive.google.com/file/d/1qH84G3UVlhsRqG_EC-cIV7gSHI87lK4B/view?usp=sharing"
    },
    {
      id: 4,
      image: work,
      projectTitle: "Work Day Scheduler",
      description: "Calendar for Scheduling your Work Day",
      github:
        "https://github.com/jfranklin12/Julian-Franklin-Team-Profile-Generator",
      website: "https://jfranklin12.github.io/Julian-Franklin-Work-Day-Scheduler/"
    },
    {
      id: 5,
      image: blog,
      projectTitle: "Connect, Learn, Teach",
      description: "A Tech Blog",
      github: "https://github.com/jfranklin12/JFranklin-Connect-Learn-Teach",
      website: "https://julian-franklin-tech-blog.herokuapp.com/"
    },
    {
      id: 6,
      image: social,
      projectTitle: "Social Network API",
      description: "Backend Routes for a Social Network Application",
      github: "https://github.com/jfranklin12/Social-Network-API",
      website: "https://drive.google.com/file/d/1-RSisbQtVtqO8lXukffN7hBzR-ZbXb8T/view"
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
      {projects.map((item, index) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.projectTitle}
            id="carouselImage"
          />
          <Carousel.Caption>
            <h3><a href={item.website} target="_blank"  id="projTitle">{item.projectTitle}</a> <a href={item.github} target="_blank" id="projGit">
              <Github /></a></h3>
            <h5 id="projDes">{item.description}</h5>
            
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyWorkCarousel;
