import React from "react";
import Button from "react-bootstrap/Button";
import image from "./download.jpg";
import { SocialIcon } from 'react-social-icons'
import "./about.scss";


export default function About() {
  return (
    <div className="landing">
      <div className="social">
        <SocialIcon className="icon" url="https://www.facebook.com/viraj.kumar.9634" />
        <SocialIcon className="icon " url="https://twitter.com/VirajKumar1025" />
        <SocialIcon className="icon" url="https://www.linkedin.com/in/viraj-kumar-78b57a193/" />
        <SocialIcon className="icon" url="https://www.instagram.com/viraj_kumar1" />
        <SocialIcon className="icon" url="https://github.com/wharf667" />



      </div>
      <div className="container">
        <div className="text">
          <h1>Hello, i'm Viraj</h1>
          <h6>I am a Frontend Developer from India.</h6>
          <h6>I love to build things and make people happy.</h6>
          <Button variant="outline-primary">Primary</Button>
        </div>

        <div className="iamge-holder">
          <img src={image} alt="Viraj"></img>
        </div>
      </div>
    </div>
  );
}
