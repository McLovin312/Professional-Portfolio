import Container from 'react-bootstrap/Container';

// Shared wrapper so every section gets the same spacing and heading style.
function Section({ id, title, intro, className = '', children }) {
  return (
    <section id={id} className={`py-5 ${className}`}>
      <Container className="py-lg-4">
        {title && <h2 className={`h3 fw-semibold ${intro ? 'mb-2' : 'mb-4'}`}>{title}</h2>}
        {intro && <p className="text-secondary mb-4 col-lg-7">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}

export default Section;
