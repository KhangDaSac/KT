import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Items from '../components/Items';
import { useItems } from '../context/ItemsContext';

const Home = () => {
  const { items } = useItems();


  return (
    <div>
      <div
        className="py-5 text-center"
        style={{
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0'
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-light mb-3">SUPER CRISPY</h1>
          <h2 className="display-5 fw-bold text-light mb-4">CAKEZONE</h2>
          <p className="lead text-light mb-5">THE BEST CAKE IN LONDON</p>
          <Button
            as={Link}
            to="/items"
            variant="warning"
            size="lg"
            className="px-4 py-2 text-uppercase fw-bold"
          >
            Browse Cakes
          </Button>
        </Container>
      </div>

      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fs-1 text-uppercase mb-3" style={{ color: '#ca9f33' }}>Menu & Pricing</h2>
          <h3 className="display-5 text-uppercase mb-4">EXPLORE OUR CAKES</h3>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Button variant="warning" className="mx-2 text-uppercase fw-bold">Birthday</Button>
          <Button variant="outline-dark" className="mx-2 text-uppercase fw-bold">Wedding</Button>
          <Button variant="outline-dark" className="mx-2 text-uppercase fw-bold">Custom</Button>
        </div>
        <Items items={items} />
      </Container>
    </div>
  );
};

export default Home;
