import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">ABC Brand</h5>
            <p className="mb-1">123 Main St, Anytown, USA</p>
            <p className="mb-1">info@abcbrand.com</p>
            <p className="mb-1">123-456-7890</p>
          </Col>
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">ABC Brand</h5>
            <p className="mb-1">123 Main St, Anytown, USA</p>
            <p className="mb-1">info@abcbrand.com</p>
            <p className="mb-1">123-456-7890</p>
          </Col>
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">ABC Brand</h5>
            <p className="mb-1">123 Main St, Anytown, USA</p>
            <p className="mb-1">info@abcbrand.com</p>
            <p className="mb-1">123-456-7890</p>
          </Col>
          <Col md={3} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">ABC Brand</h5>
            <p className="mb-1">123 Main St, Anytown, USA</p>
            <p className="mb-1">info@abcbrand.com</p>
            <p className="mb-1">123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
