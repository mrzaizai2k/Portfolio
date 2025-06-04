import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaDev } from "react-icons/fa";
import { SiKaggle, SiTelegram, SiUpwork } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with AI and machine learning, and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> Python, ReactJS, and JavaScript. </b>
              </i>
              <br />
              <br />
              My field of interest lies in building new
              <i>
                <b className="purple">AI-powered applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Computer Vision, NLP, and MLOps.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing solutions
              with <b className="purple">PyTorch and TensorFlow</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern AI and Web Frameworks
                </b>
              </i>
                like
              <i>
                <b className="purple"> Flask, React.js, and Hugging Face Transformers</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ width: "300px", height: "300px", borderRadius: "50%" }} 
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mrzaizai2k"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/baochiwork/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dev.to/mrzaizai2k"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDev />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@mrzaizai2k-ai704"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Chibao_mrzaizai2k"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~012aa38f4e6f69e36b?mp_source=share"
                  target="_blank" 
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/maichibao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiKaggle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;