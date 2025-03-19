import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-3">Thông tin sinh viên</h5>
            <p className="mb-1">Họ và tên: </p>
            <p className="mb-1">Mã sinh viên: </p>
            <p className="mb-1">Lớp: </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
