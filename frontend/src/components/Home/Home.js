import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Mrzaizai2k_home_1.png";
import "./Home.css";

const Particle = lazy(() => import("../Particle"));
const Home2 = lazy(() => import("./Home2"));
const Type = lazy(() => import("./Type"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Helmet>
          <title>Mrzaizai2k | Home</title>
        </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-label="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> MAI CHI BAO (Mrzaizai2k)</strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
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
          <Home2 />
        </Suspense>
      </Container>
    </section>
  );
}

export default React.memo(Home);