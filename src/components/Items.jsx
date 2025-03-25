import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useItems } from '../context/ItemsContext';
import { Link } from 'react-router-dom';

const Items = ({ items }) => {
    const { addToCart } = useCart();
    const { formatPrice } = useItems();
    return (
        <Container className="py-5">
            <div className="text-center mb-4">
                <h1 className="mb-2">Our Products</h1>
                <p className="text-muted">Discover our amazing collection of items</p>
            </div>
            <Row className="g-4">
                {items.map(item => (
                    <Col key={item.id} lg={4} md={6} sm={12} className="mb-4">
                        <Card className="h-100 shadow-sm d-flex">
                            <div>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    className="card-img-top"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold">{item.name}</Card.Title>
                                    <Card.Text className="text-muted mb-3">
                                        {item.description}
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="fw-bold text-primary">
                                                {formatPrice(item.price)}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <Button
                                                variant="primary"
                                                onClick={() => addToCart(item)}
                                                className="flex-grow-1 me-2"
                                            >
                                                Add to Cart
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                as={Link}
                                                to={`/item/${item.id}`}
                                                className="flex-grow-2 ms-2"
                                            >
                                                View Details
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </div>


                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Items;
