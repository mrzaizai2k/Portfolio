import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

function ProjectCards(props) {
  const iframeRef = useRef(null);

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    try {
      if (url.includes("youtu.be/")) {
        const match = url.match(/youtu\.be\/([^?&]+)/);
        return match ? match[1] : null;
      }
      if (url.includes("youtube.com")) {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
      }
      return null;
    } catch (error) {
      console.error("Error parsing YouTube URL:", error);
      return null;
    }
  };

  const isYouTubeLink = props.demoLink && (props.demoLink.includes("youtube.com") || props.demoLink.includes("youtu.be"));
  const videoId = isYouTubeLink ? getYouTubeVideoId(props.demoLink) : null;
  const thumbnailUrl = isYouTubeLink && videoId 
    ? `https://img.youtube.com/vi/${videoId}/default.jpg` 
    : props.imgPath;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, [videoId]);

  return (
    <Card className="project-card-view">
      {isYouTubeLink && videoId ? (
        <div className="youtube-embed">
          <iframe
            ref={iframeRef}
            width="90%"
            height="200"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Card.Img 
          variant="top" 
          src={thumbnailUrl} 
          alt="project thumbnail"
          loading="lazy"
        />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text className="card-description">
          {props.description && Array.isArray(props.description) ? (
            props.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            props.description
          )}
        </Card.Text>
        
        <div className="skills-tags">
          {props.skills?.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
        <div className="deliverables-tags">
          {props.deliverables?.map((deliverable, index) => (
            <span key={index} className="tag">{deliverable}</span>
          ))}
        </div>
        <div className="button-container">
          {props.ghLink && (
            <Button className="project-btn" variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.blogLink && (
            <Button className="project-btn" variant="primary" href={props.blogLink} target="_blank">
              <FaDev /> Blog
            </Button>
          )}
          {props.demoLink && (
            <Button className="project-btn" variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default React.memo(ProjectCards);