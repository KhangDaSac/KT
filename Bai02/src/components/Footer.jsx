import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="gy-3">
          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Title</h5>
            <p className="mb-1">Line</p>
            <p className="mb-1">Line</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Title</h5>
            <p className="mb-1">Line</p>
            <p className="mb-1">Line</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Title</h5>
            <p className="mb-1">Line</p>
            <p className="mb-1">Line</p>
          </Col>

          <Col md={3} className="text-center text-md-start">
            <h5 className="text-warning mb-3">Title</h5>
            <p className="mb-1">Line</p>
            <p className="mb-1">Line</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
