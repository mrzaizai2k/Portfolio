import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mai Chi Bao (Mrzaizai2k) </span>
            from <span className="purple"> Viet Nam.</span>
            <br />
            I am currently employed as a Senior Machine Learning Engineer and Data Science Team Leader at Nam A Bank.
            <br />
            I have completed a BEng in Electronics - Telecommunications Engineering and am pursuing an MSc in Computer Science at Ho Chi Minh City University of Technology.
            <br />
            <br />
            Apart from AI and ML, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered apps
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring IoT and embedded systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing and Traveling
            </li>            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You want WEAPONS? BOOKS are the best weapon in the world.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            ARM YOURSELF!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;