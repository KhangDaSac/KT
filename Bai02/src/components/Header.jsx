import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from './BookModal';
import { useCart } from '../context/CartContext';
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
              <span className="text-warning fs-6 fw-bold">Brand</span>
              <span className="text-light fs-3 fw-bold">MY BRAND</span>
            </div>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-2 text-uppercase">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="mx-2 text-uppercase">Cart</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="mx-2 text-uppercase">About Us</Nav.Link>
              <Nav.Link as={Link} to="/items" className="mx-2 text-uppercase">Menu & Pricing</Nav.Link>
              <Nav.Link as={Link} to="/master-chefs" className="mx-2 text-uppercase">Master Chefs</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-2 text-uppercase">Contact Us</Nav.Link>
            </Nav>
            <div>
              <Button
                variant="warning"
                onClick={() => setShowBooking(true)}
                className="px-3 py-2 text-uppercase fw-bold me-2"
              >
                Book Table
              </Button>
              <Button
                variant="warning"
                onClick={() => setShowCart(true)}
                className="px-3 py-2 text-uppercase fw-bold ms-2"
              >
                Cart
                {
                  getTotalQuantity() > 0 && (
                    <Badge
                      bg="danger"
                      className="ms-2"
                    >
                      {getTotalQuantity()}
                    </Badge>
                  )
                }
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
