import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useItems } from '../context/ItemsContext';
import { Link } from 'react-router-dom';

const Items = ({ items }) => {
    const { addToCart } = useCart();
    const { formatPrice } = useItems();
    return (
        <>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3">Our Products</h1>
                    <p className="lead text-muted">Discover our amazing collection of items</p>
                </div>
                <Row className="g-4">
                    {items.map(item => (
                        <Col key={item.id} lg={4} md={6}>
                            <Card className="h-100 border-0 shadow-sm hover-effect">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                    className="rounded-top"
                                />
                                <Card.Body className="d-flex flex-column p-4">
                                    <Card.Title className="fw-bold mb-3 fs-4">{item.name}</Card.Title>
                                    <Card.Text className="text-muted mb-3 flex-grow-1">
                                        {item.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <span className="fs-4 fw-bold text-primary">
                                            {formatPrice(item.price)}
                                        </span>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            onClick={() => addToCart(item)}
                                            className="py-2"
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            as={Link}
                                            to={`/item/${item.id}`}
                                            className="py-2"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Items;
