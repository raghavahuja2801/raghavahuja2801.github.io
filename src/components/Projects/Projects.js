import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumni from "../../Assets/Projects/alumni.png"
import podcastai from "../../Assets/Projects/podcastai.png"
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={podcastai}
              isBlog={false}
              title="PodcastAI"
              description="Convert any document into a high-quality podcast. Save time, reach wider audiences, and make your content more accessible"
              demoLink="https://warm-mesa-96509-c160eec7ab15.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Job Portal"
              description="AI Job Portal is a web application built on the MERN stack (MongoDB, Express.js, React, Node.js) designed to connect employers with candidates efficiently. The platform leverages AI to streamline job application processes, such as resume parsing, skill extraction, and job matching, making it easier for candidates to find the right job and employers to find the right talent."
              ghLink="https://github.com/raghavahuja2801/AI-Portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Alumni Portal"
              description="The alumni portal is a dynamic web application built on the MEAN stack (MongoDB, Express.js, Angular, and Node.js) designed to connect alumni of the school in a streamlined and interactive platform. It offers features like alumni registration, profile creation, and searchable directories to help users reconnect and network with classmates."
              ghLink="https://github.com/raghavahuja2801/school-alumni-portal"
              demoLink="https://school-alumni-portal-ma9dk2g0v-raghavahuja2801s-projects.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
