import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useItems } from '../context/ItemsContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const { items, formatPrice } = useItems();
    const { addToCart } = useCart();
    const item = items.find(item => item.id === parseInt(id));

    if (!item) {
        return (
            <Container className="py-5">
                <div className="text-center">
                    <h2 className="mb-4">Item not found</h2>
                    <Button as={Link} to="/items" variant="primary">
                        Back to Items
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row className="g-4">
                <Col lg={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Img
                            variant="top"
                            src={item.image}
                            className="rounded-3"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </Card>
                </Col>
                <Col lg={6}>
                    <div className="h-100 d-flex flex-column">
                        <h1 className="display-4 fw-bold mb-3">{item.name}</h1>
                        <Badge bg="primary" className="mb-3 fs-6 py-2 px-3">
                            {formatPrice(item.price)}
                        </Badge>
                        <p className="lead mb-4">{item.description}</p>
                        <div className="mt-auto">
                            <div className="d-grid gap-3">
                                <Button
                                    size="lg"
                                    variant="primary"
                                    onClick={() => addToCart(item)}
                                    className="py-3"
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline-primary"
                                    as={Link}
                                    to="/items"
                                    className="py-3"
                                >
                                    Back to Items
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;
