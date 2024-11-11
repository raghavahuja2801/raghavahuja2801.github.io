import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumni from "../../Assets/Projects/alumni.png"
import podcastai from "../../Assets/Projects/podcastai.png"
import bitsOfCode from "../../Assets/Projects/blog.png";
import disney from "../../Assets/Projects/disney.png"
import notion from "../../Assets/Projects/notion-clone.png"

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
              demoLink="podcast-ai.xyz"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notion}
              isBlog={false}
              title="Jotion"
              description="Jotion clone is a web application built using Next.js and Convex, designed to replicate the core features of Notion, such as note-taking, task management, and collaborative workspace. It leverages the power of Convex for real-time data synchronization, allowing users to efficiently create, edit, and share content in a seamless and collaborative environment. This clone mirrors Notion’s intuitive design and functionality, offering a user-friendly interface and smooth interactions."
              ghLink="https://github.com/raghavahuja2801/Notion-Clone-Nextjs"
              demoLink="https://notion-clone-i0qka51dc-raghavahuja2801s-projects.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disney}
              isBlog={false}
              title="Disney Clone"
              description="A replica of the Disney Plus streaming platform built using React, Firebase, and Styled Components. This project features user authentication, personalized content browsing, and a sleek, responsive UI. The app leverages Firebase for real-time user data management and login functionality, while Styled Components is used for modern and maintainable styling. Users can sign in, browse through different categories, and view movie or show details seamlessly, emulating the Disney Plus experience."
              ghLink="https://github.com/raghavahuja2801/disneyclone"
              demoLink="https://raghavahuja2801.github.io/disneyclone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
