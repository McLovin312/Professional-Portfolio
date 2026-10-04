import React from 'react';
import Container from 'react-bootstrap/Container';
import Experience from './Experience';
import EducationSkills from './EducationSkills';

function Resume() {
  return (
    <section id="resume" className="py-5 bg-body-tertiary border-top">
      <Container className="py-lg-4">
        <Experience />
        <EducationSkills />
      </Container>
    </section>
  );
}

export default Resume;