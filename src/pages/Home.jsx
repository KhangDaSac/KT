import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Items from '../components/Items';
import { useItems } from '../context/ItemsContext';

const Home = () => {
  const { items } = useItems();


  return (
    <div>
        <Container className="text-light py-5 bg-secondary">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-3 fw-bold mb-4">ABC Brand</h1>
              <p className="lead mb-4">
                Welcome to ABC Brand
              </p>
              <Button 
                as={Link} 
                to="/listPage" 
                variant="primary" 
                size="lg" 
                className="me-3"
              >
                View items
              </Button>
            </Col>
          </Row>
        </Container>

      <Items items={items} />
    </div>
  );
};

export default Home;
