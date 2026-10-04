import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Experience() {
  return (
    <>
      <h2 className="h3 fw-semibold mb-4">Experience</h2>

      <Row className="g-0 border-top py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">Jul 2026 to present</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Software Support Engineer II</h3>
          <p className="small text-secondary mb-3">Inductive Automation, Folsom, CA (remote)</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Lead complex escalations and root cause analysis for Ignition SCADA customers across industrial environments.</li>
            <li>Resolve issues spanning Python scripting, OPC UA connectivity, SQL databases, gateway performance, networking and system architecture.</li>
            <li>Mentor support engineers, carry reproducible findings back to engineering and document solutions to shorten future resolution time.</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-0 border-top py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">May 2025 to Jul 2026</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Software Support Engineer I</h3>
          <p className="small text-secondary mb-3">Inductive Automation, California (hybrid)</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Resolved Python, PLC and system software issues for industrial clients from first report through verified fix.</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-0 border-top py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">Sep 2024 to May 2025</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Software Technical Analyst</h3>
          <p className="small text-secondary mb-3">Hybrid</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Handled front line software support, data analysis and troubleshooting on complex customer systems.</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-0 border-top py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">Feb 2023 to Dec 2023</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Power, Controls and Information Systems Technician</h3>
          <p className="small text-secondary mb-3">Mars, Gainesville, GA</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Maintained electrical power systems, automated controls and industrial networks on a running production site.</li>
            <li>Supported system upgrades with engineering and troubleshot faults spanning hardware and software.</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-0 border-top py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">Jan 2022 to Feb 2023</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Engineering Technician II</h3>
          <p className="small text-secondary mb-3">Honeywell, Duluth, GA</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Performed electrical testing and supported research and development for Healthy Building Technologies.</li>
          </ul>
        </Col>
      </Row>

      <Row className="g-0 border-top border-bottom py-4">
        <Col md={3} className="mb-2 mb-md-0">
          <p className="small fw-medium text-secondary mb-0">Aug 2021 to Jan 2022</p>
        </Col>
        <Col md={9}>
          <h3 className="h5 fw-semibold mb-1">Laboratory Technician and Tutor</h3>
          <p className="small text-secondary mb-3">Chattahoochee Technical College</p>
          <ul className="mb-0 ps-3 text-secondary">
            <li>Led lab instruction on PLCs, industrial motor controls, hydraulic and pneumatic systems and electrical circuits.</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default Experience;