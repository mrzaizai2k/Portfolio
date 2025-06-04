import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiReact, DiJavascript1 } from "react-icons/di";
import { SiPytorch, SiTensorflow, SiAmazonaws, SiMicrosoftazure, SiDocker, SiKubernetes, SiMysql, SiOracle, SiFlask, SiPandas } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiPandas />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiPytorch />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiTensorflow />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaBrain />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiAmazonaws />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiMicrosoftazure />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiDocker />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiKubernetes />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiFlask />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiMysql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <SiOracle />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <DiJavascript1 />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;