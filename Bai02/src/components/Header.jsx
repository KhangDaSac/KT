import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from './BookModal';
import { useCart } from '../context/CartContext';
import { Badge } from 'react-bootstrap';
import Cart from './Cart';

const Header = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { getTotalQuantity } = useCart();
  return (
    <header className="w-100 mb-0">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3">
        <Container>
          <Link to="/" className="text-decoration-none">
            <div className="d-flex flex-column align-items-center me-4">
              <span className="text-warning fs-6 fw-bold">SUPER CRISPY</span>
              <span className="text-light fs-3 fw-bold">CAKEZONE</span>
            </div>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-2 text-uppercase">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="mx-2 text-uppercase">About Us</Nav.Link>
              <Nav.Link as={Link} to="/items" className="mx-2 text-uppercase">Menu & Pricing</Nav.Link>
              <Nav.Link as={Link} to="/master-chefs" className="mx-2 text-uppercase">Master Chefs</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-2 text-uppercase">Contact Us</Nav.Link>
            </Nav>
            <div>
              <Button
                variant="warning"
                onClick={() => setShowBooking(true)}
                className="px-3 py-2 text-uppercase fw-bold"
              >
                Book Table
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BookModal
        show={showBooking}
        onHide={() => setShowBooking(false)}
      />
      <Cart
        show={showCart}
        onHide={() => setShowCart(false)}
      />
    </header>
  );
};

export default Header;
