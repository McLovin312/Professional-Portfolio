import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <section 
      id="cover" 
      className="min-vh-100 d-flex align-items-center text-white" 
      style={{ backgroundColor: '#212529' }}
    >
      <Container className="py-5">
        <Row>
          <Col lg={9} xl={8}>
            <h1 className="display-2 fw-semibold mb-2">Thomas Lovin</h1>
            <p className="fs-3 fw-light mb-4 text-secondary">
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
            <p className="small mt-5 mb-0 text-secondary">
              Working remote.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;