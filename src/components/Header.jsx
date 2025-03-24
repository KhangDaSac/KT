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
    <header className="w-100">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
            ABC Brand
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/items" className="mx-3">Items</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="mx-3">Cart</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">Contact</Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              onClick={() => setShowBooking(true)}
              className="px-4 py-2 mx-2"
            >
              Book
            </Button>
            <Button
              variant="outline-light"
              onClick={() => setShowCart(true)}
              className="px-4 py-2 mx-2"
            >
              Cart
              <Badge
                bg="danger"
                className="ms-2"
              >
                {getTotalQuantity()}
              </Badge>
            </Button>

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
