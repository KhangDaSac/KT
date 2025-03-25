import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useItems } from '../context/ItemsContext';
import { Link } from 'react-router-dom';

const Items = ({ items }) => {
    const { addToCart } = useCart();
    const { formatPrice } = useItems();
    const [category, setCategory] = useState('all');

    const filteredItems = category === 'all'
        ? items
        : items.filter(item => item.category === category.toUpperCase());

    return (
        <Container className="py-5">
            <div className="text-center mb-4">
                <h1 className="mb-2">Our Products</h1>
                <p className="text-muted">Discover our amazing collection of items</p>
            </div>
            <Row className="g-4">
                {filteredItems.map(item => (
                    <Col key={item.id} lg={6} md={12} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm d-flex flex-row">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                                />
                                <div className="d-flex justify-content-center align-items-center bg-dark w-100 py-2 rounded-bottom">
                                    <h5 className="text-warning fw-bold mb-0">
                                        {formatPrice(item.price)}
                                    </h5>
                                </div>
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title className="text-uppercase text-start fw-bold fs-5 mb-3">
                                    {item.name}
                                </Card.Title>
                                <Card.Text className="text-muted mb-3 small text-start">
                                    {item.description}
                                </Card.Text>
                                <div className="d-flex justify-content-center align-items-center">

                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button
                                        variant="dark"
                                        onClick={() => addToCart(item)}
                                        className="mt-3 w-100 me-2 flex-1"
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="outline-dark"
                                        onClick={() => addToCart(item)}
                                        className="mt-3 w-100 ms-2 flex-2"
                                    >
                                        Detail
                                    </Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Items;
