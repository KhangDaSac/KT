import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="gy-3">
          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">About</h5>
            <p className="mb-1">Student Name:</p>
            <p className="mb-1">Student ID:</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Midterm Exam</h5>
            <p className="mb-1">Application: Interface development</p>
            <p className="mb-1">Date: 23/3/2025</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Class</h5>
            <p className="mb-1">Class name:</p>
            <p className="mb-1">CNTT-BUTT</p>
            <p className="mb-1">Class ID: 422000456303</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Contact</h5>
            <p className="mb-1">Email:</p>
            <p className="mb-1">Phone:</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
