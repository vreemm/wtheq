import React, { useState } from "react";
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import imgHome from '../images/HomePagepic.png';
import '../styles/HomePage.css';
import keepIn from'../images/keepInTouch.png';
import project from '../images/minorProject.png';
import { Link } from "react-router-dom";



const HomePage = () => { 
  
  return (
  <div className="main-container">
    <div className="container grid grid-two-column">
      <div className="Home-page-data">
        <p className="home-top-data">Hello again..</p>
        <h1 className="home-heading">wtheq</h1>
        <pre className="home-para">Let's improve (Work) Lives,together</pre>
      </div>
      <div className="Home-page-img">
        <img src={imgHome} alt="Home Img" />
      </div> 
    </div>

    
    <div className="flex-container">
      <div className="flex-child">
       <h2 className="title">Our Mission</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante auctor, posuere elit id, venenatis nisl. Nulla facilisi.</p>
      </div>

      <div className="flex-child">
       <h2 className="title">Our Vision</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante auctor, posuere elit id, venenatis nisl. Nulla facilisi.</p>
      </div>
    </div>


    <Card>
      <Card.Img src={keepIn} alt="keep Img"  />
      <Card.Body>
        <Card.Title><h4>Keep In touch</h4></Card.Title>
        <Card.Text>
          check out what's happening today!
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Link to = "/keepInTouch">
          <Button className="ms-3">check</Button></Link>
        </div>
        </Card.Body>
      </Card>
    
    <Card>
      <Card.Img src={project} alt="project Img"  />
      <Card.Body>
        <Card.Title><h4>Minor Project</h4></Card.Title>
        <Card.Text>
          check out what's a new project avaliable today!
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Link to = "/Project">
          <Button className="ms-3">check</Button></Link>
        </div>
      </Card.Body>
    </Card>
      


   

  </div> 
  );
  
};



export default HomePage;


