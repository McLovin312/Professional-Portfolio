import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profilePic from "../assets/profile-picture.jpg"; 

function About() {
  return (
    <section id="about" className="py-5">
      <Container className="py-lg-4">
        <h2 className="h3 fw-semibold mb-4">About</h2>
        <Row className="g-5 align-items-start">
          <Col md={4} lg={3}>
            <Image 
              src={profilePic} 
              alt="Thomas Lovin" 
              className="portrait rounded-circle" 
              fluid 
              style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
            />
          </Col>
          <Col md={8} lg={8}>
            <p>
              I started as an electrical and controls technician, wiring panels and keeping
              production equipment online at Mars and Honeywell. Working on live systems
              taught me how automation actually fails: rarely in one clean place, usually at
              the seam between two layers that each look fine on their own.
            </p>
            <p>
              I moved into software support in 2024 and now handle advanced escalations for
              Ignition customers. A typical case involves Python scripts behaving differently
              under load, historian queries slowing down as data volume grows, gateways
              struggling at shift change, or an architecture that outgrew its original sizing.
              The work is disciplined narrowing, then a clear explanation the customer can use.
            </p>
            <p className="mb-0 text-secondary">
              Alongside the day job I finished a B.S. in Computer Information Systems at
              Valdosta State University and keep building small projects to stay close to how
              software is put together. This site is one of them.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;