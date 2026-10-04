import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EducationSkills() {
  return (
    <Row className="g-5 mt-5">
      <Col lg={7}>
        <h2 className="h3 fw-semibold mb-4">Education</h2>
        <div className="border-top py-4">
          <h3 className="h5 fw-semibold mb-1">B.S. Computer Information Systems</h3>
          <p className="small text-secondary mb-3">Valdosta State University, Aug 2022 to May 2026</p>
          <p className="mb-0 text-secondary">
            Minor in computer science. GPA 3.6. Coursework in software engineering,
            database and network design, systems analysis and design, with supporting
            mathematics and business requirements.
          </p>
        </div>
        <div className="border-top border-bottom py-4">
          <h3 className="h5 fw-semibold mb-1">A.A.S. Industrial and Electrical Technology</h3>
          <p className="small text-secondary mb-3">Chattahoochee Technical College, 2020 to 2022</p>
          <p className="mb-0 text-secondary">
            High and low voltage systems, motor controls, PLCs, fluid power and
            electrical theory across residential, commercial and industrial work.
          </p>
        </div>
      </Col>

      <Col lg={5}>
        <h2 className="h3 fw-semibold mb-4">Skills</h2>
        <ul className="list-unstyled mb-0 skills">
          <li className="border-top py-2">Python scripting</li>
          <li className="border-top py-2">SQL and database administration</li>
          <li className="border-top py-2">Ignition SCADA</li>
          <li className="border-top py-2">OPC UA connectivity</li>
          <li className="border-top py-2">PLCs and motor controls</li>
          <li className="border-top py-2">Gateway performance tuning</li>
          <li className="border-top py-2">Industrial networking</li>
          <li className="border-top py-2">System architecture</li>
          <li className="border-top py-2">Root cause analysis</li>
          <li className="border-top border-bottom py-2">Java, C, HTML and CSS</li>
        </ul>
      </Col>
    </Row>
  );
}

export default EducationSkills;