import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="position-relative min-vh-100 d-flex align-items-center overflow-hidden text-white">
      
      <div id="cover"></div>

      <Container className="position-relative py-5" style={{ zIndex: 1 }}>
        <Row>
          <Col lg={9} xl={8}>
            <h1 className="display-2 fw-semibold mb-2">Thomas Lovin</h1>
            
            <p className="fs-3 fw-light mb-4 text-white-50">
              Software Support Engineer II
            </p>
            
            <p className="fs-5 mb-5 col-xl-10">
              Industrial automation and SCADA systems. I support the Ignition platform at
              Inductive Automation and handle the escalations that cross hardware, software
              and network boundaries.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-pill px-4 fw-semibold" 
                href="#resume"
              >
                View resume
              </Button>
              <Button 
                variant="outline-light"
                size="lg" 
                className="rounded-pill px-4 fw-semibold" 
                href="#contact"
              >
                Get in touch
              </Button>
            </div>
            
            <p className="small mt-5 mb-0 text-white-50">
              Working remote.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;