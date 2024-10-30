import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate programmer with expertise in languages such as
              <span className="purple"> Python, JavaScript, C++, SQL, and Go</span>, with additional experience in
              <span className="purple"> Haskell</span> and <span className="purple"> Rust</span>. My interests focus on
              building innovative web technologies and products, particularly in the areas of
              <span className="purple"> AI, machine learning, and blockchain</span>.
              <br />
              <br />
              I specialize in developing high-performance applications using modern frameworks and libraries like
              <i>
                <b className="purple"> React.js, Next.js, and Angular </b>
              </i>
              alongside backend tools like
              <i>
                <b className="purple"> Flask, FastAPI, and Node.js</b>
              </i>.
              <br />
              <br />
              My database expertise includes working with
              <i>
                <b className="purple">MySQL, MongoDB, Firebase,</b>
              </i> and <i><b className="purple">PostgreSQL</b></i>, ensuring data reliability and scalability.
              <br />
              <br />
              I also have a strong foundation in DevOps and cloud-based workflows, using tools like
              <i>
                <b className="purple">Jenkins, Docker, Kubernetes,</b>
              </i> and <i><b className="purple">GitLab CI</b></i> to optimize development pipelines and automate deployments, enhancing stability and efficiency in each project.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raghavahuja2801"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/raghavahuja18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahuja-raghav/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/raghhav_ahuja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
