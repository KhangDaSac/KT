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
                <h1 className="text-center mb-5">List of items</h1>
                <Row>
                    {items.map(item => (
                        <Col key={item.id} lg={4} md={6} className="mb-4">
                            <Card className="h-100 shadow-sm hover-effect">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold mb-3">{item.name}</Card.Title>
                                    <Card.Text className="text-muted mb-3">
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text className="text-muted mb-3">
                                        <span className="fs-5 fw-bold text-primary">
                                            {formatPrice(item.price)}
                                        </span>
                                    </Card.Text>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <Button
                                            variant="primary"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            variant="outline-primary outline"
                                            as={Link}
                                            to={`/item/${item.id}`}
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
        </>
    );
}

export default Items;
