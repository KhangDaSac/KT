import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useItems } from '../context/ItemsContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const { items, formatPrice, findItemById } = useItems();
    const { addToCart } = useCart();

    const item = findItemById(parseInt(id));
    return (
        <Container className="py-4">
            <Row>
                <Col md={6} className="mb-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                    />
                </Col>
                <Col md={6}>
                    <h2 className="mb-3">{item.name}</h2>
                    <h4 className="text-dark mb-3">{formatPrice(item.price)}</h4>
                    <p className="mb-4">{item.description}</p>
                    <div className="d-grid gap-2 mb-4">
                        <Button 
                            variant="dark" 
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </Button>
                        <Button 
                            variant="outline-dark" 
                            as={Link} 
                            to="/items"
                        >
                            Back to Items
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;
