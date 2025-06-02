import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

function ProjectCards(props) {
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    try {
      // Handle youtu.be format
      if (url.includes("youtu.be/")) {
        const match = url.match(/youtu\.be\/([^?&]+)/);
        return match ? match[1] : null;
      }
      
      // Handle youtube.com format
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
  
  // Use hqdefault.jpg as fallback since maxresdefault.jpg might not exist for all videos
  const thumbnailUrl = isYouTubeLink && videoId 
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` 
    : props.imgPath;

  return (
    <Card className="project-card-view">
      {isYouTubeLink && videoId ? (
        <div className="youtube-embed">
          <iframe
            width="90%"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}`}
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
          alt="card-img"
          onError={(e) => {
            if (isYouTubeLink && videoId) {
              if (e.target.src.includes('hqdefault')) {
                e.target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
              } else if (e.target.src.includes('sddefault')) {
                e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
              }
            }
          }}
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
          {!props.isBlog && props.demoLink && !isYouTubeLink && (
            <Button className="project-btn" variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;