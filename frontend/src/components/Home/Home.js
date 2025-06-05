import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Mrzaizai2k_home_1.png";
import Particle from "../Particle";
import "./Home.css";

const Home2 = lazy(() => import("./Home2"));
const Type = lazy(() => import("./Type"));

function Home() {
  return (
    <section>
      <Helmet>
        <title>Mrzaizai2k | Home</title>
      </Helmet>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name"> MAI CHI BAO (Mrzaizai2k)</strong>
              </h1>
              <div style={{ padding: "50px 0", textAlign: "left" }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Type />
                </Suspense>
              </div>
            </Col>
            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Home2 />
      </Suspense>
    </section>
  );
}

export default Home;