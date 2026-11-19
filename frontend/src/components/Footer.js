import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaPuzzlePiece } from "react-icons/fa";
import { SiTelegram, SiUpwork  } from "react-icons/si";

const TOOLS_URL =
  window.location.hostname === "localhost"
    ? "http://tools.localhost"
    : "https://tools.mrzaizai2k.com";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Mrzaizai2k</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Mrzaizai2k</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/mrzaizai2k"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/baochiwork/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>           
            <li className="social-icons">
              <a
                href="https://t.me/Chibao_mrzaizai2k"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~012aa38f4e6f69e36b?mp_source=share"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiUpwork  />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={TOOLS_URL}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cool stuff"
                title="Cool stuff"
              >
                <FaPuzzlePiece />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;