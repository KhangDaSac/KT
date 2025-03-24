import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useItems } from '../context/ItemsContext';
import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { findItem, formatPrice } = useItems();
    const { addToCart } = useCart();
    const { id } = useParams();
    const item = findItem(id);
    return (
        <Container className="py-5 d-flex justify-content-center align-items-center">
            <Card.Img
                variant="top"
                src={item.image}
                style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                className="rounded"
            />
            <Card.Body className="d-flex flex-column m-5">
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
                        Thêm
                    </Button>
                </div>
            </Card.Body>
        </Container>
    )
}

export default Detail;
