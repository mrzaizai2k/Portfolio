import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cvData from "../../Assets/cv.json";
import myImg from "../../Assets/profile.webp";
import Tilt from "react-parallax-tilt";
import "./ResumeNew.css";
import { AiOutlineDownload, AiOutlineLink } from "react-icons/ai";
import ReactGA from "react-ga4";

function ResumeNew() {
  // Add this useEffect for page tracking
  useEffect(() => {
    // Track page view
    ReactGA.send({ 
      hitType: "pageview", 
      page: "/resume",
      title: "Resume Page"
    });
  }, []);
  
  const handleDownloadCV = () => {
    // Track download event
    ReactGA.event({
      action: "download",
      category: "engagement",
      label: "CV_Download",
    });
    
    const link = document.createElement('a');
    link.href = '/Assets/CV_MAI_CHI_BAO.pdf';
    link.download = 'CV_MAI_CHI_BAO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderHighlights = (highlights) => {
    if (!highlights || highlights.length === 0) return null;
    return (
      <ul className="highlights-list">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    );
  };

  const formatDateRange = (startDate, endDate) => {
    if (startDate && endDate) {
      return `${startDate} - ${endDate}`;
    }
    return startDate || endDate || "";
  };

  const renderNameWithLink = (name, url, website) => {
    const link = url || website;
    if (link) {
      return (
        <>
          <a href={link} target="_blank" rel="noopener noreferrer" className="company-link">
            {name.toUpperCase()}
          </a>
          <AiOutlineLink className="link-icon" />
        </>
      );
    }
    return name.toUpperCase();
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Helmet>
          <title>Mrzaizai2k | Resume</title>
        </Helmet>
        <Particle />

        {/* Header */}
        <Row className="resume-header">
          <Col md={12}>
            <h1 className="name-title">{cvData.basics.name} / RESUME</h1>
          </Col>
        </Row>

        {/* Avatar & Contact Info */}
        <div className="download-contact-section">
          <Row className="align-items-center">
            <Col xs={12} md={3} className="myAvatar">
              <Tilt>
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="avatar" 
                  style={{ maxWidth: "220px", borderRadius: "50%" }} 
                  loading="lazy"
                />
              </Tilt>
            </Col>
            <Col xs={12} md={9}>
              <Button
                variant="primary"
                onClick={handleDownloadCV}
                className="download-btn"
              >
                <AiOutlineDownload /> Download CV
              </Button>
              <div className="contact-info">
                <p>
                  <a href={`mailto:${cvData.basics.email}`}>{cvData.basics.email}</a>
                </p>
                <p>{cvData.basics.phone}</p>
                <p>{cvData.basics.location.city}, {cvData.basics.location.countryCode}</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Experience Section */}
        <div id="experience" className="content-section">
          <Row>
            <Col md={12}>
              <h2 className="section-title">EXPERIENCE</h2>
            </Col>
          </Row>
          {cvData.work.map((job, index) => (
            <div key={index} className="experience-entry">
              <Row>
                <Col md={3} className="date-position-col">
                  <div className="date-range">
                    {formatDateRange(job.startDate, job.endDate)}
                  </div>
                </Col>
                <Col md={1} className="bullet-col">
                  <div className="bullet-point">•</div>
                </Col>
                <Col md={8} className="company-description-col">
                  <div className="company-name">
                    {renderNameWithLink(job.company, job.url, job.website)}
                  </div>
                  <div className="position-title">{job.position}</div>
                  <div className="job-description">
                    {renderHighlights(job.highlights)}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>

        {/* Activities Section */}
        <div id="activities" className="content-section">
          <Row>
            <Col md={12}>
              <h2 className="section-title">ACTIVITIES</h2>
            </Col>
          </Row>
          {cvData.activities.map((activity, index) => (
            <div key={`activity-${index}`} className="experience-entry">
              <Row>
                <Col md={3} className="date-position-col">
                  <div className="date-range">
                    {formatDateRange(activity.startDate, activity.endDate)}
                  </div>
                </Col>
                <Col md={1} className="bullet-col">
                  <div className="bullet-point">•</div>
                </Col>
                <Col md={8} className="company-description-col">
                  <div className="company-name">
                    {renderNameWithLink(activity.organization, activity.url, activity.website)}
                  </div>
                  <div className="position-title">{activity.position}</div>
                  <div className="job-description">
                    {renderHighlights(activity.highlights)}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div id="education" className="content-section">
          <Row>
            <Col md={12}>
              <h2 className="section-title">EDUCATION</h2>
            </Col>
          </Row>
          {cvData.education.map((edu, index) => (
            <div key={index} className="experience-entry">
              <Row>
                <Col md={3} className="date-position-col">
                  <div className="date-range">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </div>
                </Col>
                <Col md={1} className="bullet-col">
                  <div className="bullet-point">•</div>
                </Col>
                <Col md={8} className="company-description-col">
                  <div className="company-name">
                    {renderNameWithLink(edu.institution, edu.url, null)}
                  </div>
                  <div className="position-title">{edu.studyType} {edu.area}</div>
                  {edu.gpa && <div className="position-subtitle">GPA: {edu.gpa}</div>}
                </Col>
              </Row>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="content-section">
          <Row>
            <Col md={12}>
              <h2 className="section-title">ACHIEVEMENTS</h2>
            </Col>
          </Row>
          {cvData.achievements.map((achievement, index) => (
            <div key={index} className="experience-entry">
              <Row>
                <Col md={3} className="date-position-col">
                  <div className="date-range">{achievement.startDate}</div>
                </Col>
                <Col md={1} className="bullet-col">
                  <div className="bullet-point">•</div>
                </Col>
                <Col md={8} className="company-description-col">
                  {achievement.name.includes('Nam A Bank') && (
                    <div className="company-name">
                      {renderNameWithLink("NAM A BANK", achievement.url, null)}
                    </div>
                  )}
                  <div className="position-title">
                    {achievement.name.includes('IELTS') ? 'IELTS' :
                     achievement.name.includes('TOEIC') ? 'TOEIC' :
                     achievement.name.includes('promotion') ? 'Promotion' :
                     achievement.name.includes('Contribution') ? 'Effective Contribution' :
                     'Achievement'}
                  </div>
                  <div className="job-description">{achievement.name}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;