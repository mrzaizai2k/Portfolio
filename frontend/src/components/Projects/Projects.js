import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import golf from "../../Assets/Projects/golf.png";
import invoice from "../../Assets/Projects/invoice.jpg";
import llm_rag from "../../Assets/Projects/llm_rag.jpg";
import stockbot from "../../Assets/Projects/stockbot.jpg";
import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Mrzaizai2k | Projects</title>
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Multi-language Invoice Extraction"
              description={[
                "The Invoice Information Extractor is a web app for businesses and individuals to automate invoice data extraction and management. Using OCR and NLP, it enables easy invoice uploads, data extraction, and report generation. Built with Reactjs and Python, it offers a user-friendly interface to view, edit, and delete invoice details."
              ]}
              blogLink="https://dev.to/mrzaizai2k/practical-approaches-to-key-information-extraction-part-2-a6o"
              skills={["Multimodal Large Language Model", "MongoDB", "AWS Application", "React.js", "OCR", "Docker"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Automatic scoring of handwritten test papers"
              description={["Extract handwritten information like name, and student ID and then recognize them with CRNN-CTC-Attention. Using lexicon search on the class list to help teachers on updating scores faster"]}
              ghLink="https://github.com/mrzaizai2k/Automated-scoring-of-handwritten-test-papers"
              demoLink="https://www.youtube.com/watch?v=fqVMa03iPVE"
              skills={["Computer Vision", "Handwritten text", "CRNN", "Deep Learning", "TensorFlow", "CTC Loss", "Algorithm Development"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm_rag}
              isBlog={false}
              title="LLM with RAG System"
              description={["System answers questions using data from files, reading math formulas, PDFs, DOCX, text, slides, and more. It leverages fine-tuned models to extract and process information accurately, supporting diverse file formats. Outputs are concise and structured, ideal for real-time queries or complex analysis."]}
              ghLink="https://github.com/mrzaizai2k/LLM-with-RAG/blob/main/README.md"
              demoLink=""
              blogLink=""
              skills={["Chatbot", "Retrieval Augmented Generation", "Large Language Model", "Model Routing", "Docker", "MLops"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MCP Server"
              description={["MCP servers provide structured data to AI, improving context awareness. The fastapi-mcp package simplifies FastAPI-based MCP server creation. My MCP server, linked to Claude Desktop on Windows, offers stock analysis, file search, transfer, editing, and task management endpoints, ensuring efficient, accurate data processing for real-time insights."]}
              ghLink="https://github.com/mrzaizai2k/LLM-with-RAG/blob/main/README.md"
              demoLink="https://www.youtube.com/watch?v=spJoWKntX4o"
              blogLink="https://dev.to/mrzaizai2k/building-an-mcp-server-with-fastapi-mcp-for-stock-analysis-a-step-by-step-guide-de6"
              skills={["MCP", "Stock Market", "Multimodal Large Language Model", "Automation", "File Management", "FastAPI"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vietnamese License Plate Recognition"
              description={["The program for recognizing license plates in the parking lot, which was utilized for both 1 and 2 rows of Vietnamese license plates. Using the KNN algorithm and the OpenCV image processing library."]}
              ghLink="https://github.com/mrzaizai2k/VIETNAMESE_LICENSE_PLATE"
              demoLink="https://www.youtube.com/watch?v=7erlCp6d5w8"
              blogLink="https://github.com/mrzaizai2k/License-Plate-Recognition-YOLOv7-and-CNN"
              skills={["Computer Vision", "OpenCV", "Licensing Plate Extraction", "Deep Learning", "Image Processing", "YOLO"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockbot}
              isBlog={false}
              title="Stock Assistant Bot"
              description={["This bot is designed to assist you with various stock-related tasks and analyses. Whether you want to calculate the payback time for a stock, find support and resistance levels, or receive warnings about specific market conditions, this bot has you covered."]}
              ghLink="https://github.com/mrzaizai2k/stock_price_4_fun"
              demoLink=""
              blogLink="https://dev.to/mrzaizai2k/how-i-build-my-personal-assistant-4j8b"
              skills={["Telegram API", "Chatbot", "Stock Market", "Large Language Model", "AI Speech-to-Text", "Mobile App"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golf}
              isBlog={false}
              title="Golf Score Card Reader"
              description={["Computer vision app employs a fine-tuned QWEN2VL model to extract player names and scores from golf score card images. Fine-tuning on diverse score card datasets optimizes accuracy for varied layouts, fonts, and image qualities, achieving 95%+ precision.",
                        "Preprocessing and OCR enhance text recognition. Fine-tuning mitigates challenges like misaligned text or handwriting, ensuring robust performance. Outputs structured JSON for real-time or bulk processing, ideal for tournaments. Multilingual support is feasible with further fine-tuning."]}
              blogLink="https://dev.to/mrzaizai2k/how-to-finetune-qwen2-vl-model-on-custom-dataset-3615"
              ghLink="https://github.com/mrzaizai2k/golf_score_ocr"
              skills={["Large Language Model", "Multimodal Large Language Model", "Handwritten text", "Computer Vision", "Finetuning"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coughvid-19 Classification"
              description={["Classifies Covid and non-Covid patients using cough sounds via CRNN-Attention model.", "Converts sound data into images for analysis.", "Analyzes differences in cough energy, distribution, breath sound, and duration.", "Leverages deep learning for accurate classification."]}
              demoLink="https://www.youtube.com/watch?v=r1xkyvSUIaw"
              ghLink="https://github.com/mrzaizai2k/Coughvid-19-CRNN-attention"
              skills={["Deep Learning", "Classification", "Feature Extraction", "Python", "TensorFlow", "Image Processing", "Computer Vision", "Data Analysis"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Teachable Machine AI"
              description={["Guides creation of a simple AI project using Teachable Machine.", "Trains models to recognize images, sounds, and poses without coding.", "Ideal for beginners to build ML models for sites and apps."]}
              demoLink="https://youtu.be/pZZNT2Rn2bI?si=IMH_DoZSgAa2T3jZ"
              ghLink="https://github.com/mrzaizai2k/Teachable-Machine-with-python"
              skills={["Python", "Classification", "Computer Vision", "Education"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Maze Solver Robot"
              description={["Arduino project using Arduino Uno, HC-SR04 ultrasonic sensor, and four DC motors with AFMotor library. Navigates mazes by measuring distances ahead and on sides. Executes stop, forward, backward, left, and right movements based on surroundings. Ideal for robotics enthusiasts and educational tutorials."]}
              demoLink="https://www.youtube.com/watch?v=2NqCVy31Y34&t=78s"
              ghLink="https://github.com/mrzaizai2k/Wall-following-car-with-Arduino"
              skills={["Arduino", "Robotics", "Ultrasonic Sensor", "DC Motors", "Maze Solving", "Embedded Systems"]}
              deliverables={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Wi-Fi LED Control"
              description={["This project enables controlling an LED via an Android app using Wi-Fi, integrating NodeMCU and Arduino Uno. The app sends commands to NodeMCU, which communicates with Arduino Uno to toggle the LED. Data feedback is sent to the app, displaying LED status in real-time."]}
              demoLink="https://www.youtube.com/watch?v=Cg5OwiP-Yvc&t=15s"
              ghLink="https://github.com/mrzaizai2k/ARUNO_NodeMCU_MIT-APP_LEDon"
              skills={["Arduino", "NodeMCU", "Wi-Fi", "MIT App Inventor", "IoT", "Embedded Systems"]}
              deliverables={[]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;