import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mai Chi Bao (Mrzaizai2k)</span> from <span className="purple"> Viet Nam.</span>
            <br />
            I am currently working as a Senior LLM Engineer at Joblogic. 
            Previously, I served as a Senior Machine Learning Engineer and Data Science Team Leader at Nam A Bank.
            <br />
            I hold a BEng in Electronics - Telecommunications Engineering and am pursuing an MSc in Computer Science at Ho Chi Minh City University of Technology.
            <br />
            <br />
            Beyond AI and ML, I also enjoy exploring other activities and interests!
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