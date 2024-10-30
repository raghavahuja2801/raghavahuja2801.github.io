import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raghav Ahuja </span>
            from <span className="purple"> Vancouver, Canada.</span>
            <br />
            I am currently pursuing my bachelors of Computing Science from Simon Fraser University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Robots
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let your joy be in your journey - not in some distant goal."{" "}
          </p>
          <footer className="blockquote-footer">Tim Cook</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
