import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import "./About.css"; // Import the new stylesheet

function About() {
  useEffect(() => {
    // Track page view
    ReactGA.send({ 
      hitType: "pageview", 
      page: "/about",
      title: "About Page"
    });
  }, []);

  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>Mrzaizai2k | About</title>
      </Helmet>
      <Particle />
      <Container>
        <Row className="about-content">
          <Col md={7} className="about-text-col">
            <h1 className="about-title">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;