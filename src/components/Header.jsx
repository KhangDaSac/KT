import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookTable from './BookTable';

const Header = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <header className="w-100">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
            ABC Restaurant
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-3">Trang chủ</Nav.Link>
              <Nav.Link as={Link} to="/menu" className="mx-3">Thực đơn</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">Liên hệ</Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              onClick={() => setShowBooking(true)}
              className="px-4 py-2"
            >
              Book Table
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BookTable
        show={showBooking}
        onHide={() => setShowBooking(false)}
      />
    </header>
  );
};

export default Header;
