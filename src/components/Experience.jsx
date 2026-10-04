import React from 'react';
import { Row, Col } from 'react-bootstrap';

const jobExperiences = [
  {
    id: 1,
    date: "Jul 2026 to present",
    title: "Software Support Engineer II",
    company: "Inductive Automation, Folsom, CA (remote)",
    bullets: [
      "Lead complex escalations and root cause analysis for Ignition SCADA customers across industrial environments.",
      "Resolve issues spanning Python scripting, OPC UA connectivity, SQL databases, gateway performance, networking and system architecture.",
      "Mentor support engineers, carry reproducible findings back to engineering and document solutions to shorten future resolution time."
    ]
  },
  {
    id: 2,
    date: "May 2025 to Jul 2026",
    title: "Software Support Engineer I",
    company: "Inductive Automation, California (hybrid)",
    bullets: [
      "Resolved Python, PLC and system software issues for industrial clients from first report through verified fix."
    ]
  },
  {
    id: 3,
    date: "Sep 2024 to May 2025",
    title: "Software Technical Analyst",
    company: "Hybrid",
    bullets: [
      "Handled front line software support, data analysis and troubleshooting on complex customer systems."
    ]
  },
  {
    id: 4,
    date: "Feb 2023 to Dec 2023",
    title: "Power, Controls and Information Systems Technician",
    company: "Mars, Gainesville, GA",
    bullets: [
      "Maintained electrical power systems, automated controls and industrial networks on a running production site.",
      "Supported system upgrades with engineering and troubleshot faults spanning hardware and software."
    ]
  },
  {
    id: 5,
    date: "Jan 2022 to Feb 2023",
    title: "Engineering Technician II",
    company: "Honeywell, Duluth, GA",
    bullets: [
      "Performed electrical testing and supported research and development for Healthy Building Technologies."
    ]
  },
  {
    id: 6,
    date: "Aug 2021 to Jan 2022",
    title: "Laboratory Technician and Tutor",
    company: "Chattahoochee Technical College",
    bullets: [
      "Led lab instruction on PLCs, industrial motor controls, hydraulic and pneumatic systems and electrical circuits."
    ]
  }
];

function Experience() {
  return (
    <>
      <h2 className="h3 fw-semibold mb-4">Experience</h2>

      {jobExperiences.map((job, index) => {
        const isLast = index === jobExperiences.length - 1;
        
        return (
          <Row key={job.id} className={`g-0 border-top py-4 ${isLast ? 'border-bottom' : ''}`}>
            <Col md={3} className="mb-2 mb-md-0">
              <p className="small fw-medium text-secondary mb-0">{job.date}</p>
            </Col>
            <Col md={9}>
              <h3 className="h5 fw-semibold mb-1">{job.title}</h3>
              <p className="small text-secondary mb-3">{job.company}</p>
              <ul className="mb-0 ps-3 text-secondary">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default Experience;