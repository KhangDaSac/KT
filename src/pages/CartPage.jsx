import React from 'react';
import { Container, Row, Col, Button,ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useItems } from '../context/ItemsContext';

const CartPage = () => {
    const { orders, removeFromCart, getTotalPrice, getTotalQuantity, updateQuantity } = useCart();
    const { formatPrice } = useItems();

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Cart</h1>
            {getTotalQuantity() === 0 ? (
                <p className="text-center">Cart is empty</p>
            ) : (
                <ListGroup>
                    {orders.map((item) => (
                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '15px' }}
                                />
                                <div>
                                    <h6 className="mb-0">{item.name}</h6>
                                    <small className="text-muted">{formatPrice(item.price)}</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                >
                                    -
                                </Button>
                                <span className="mx-3">{item.quantity}</span>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    className="ms-3"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ×
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            {getTotalQuantity() > 0 && (
                <div className="d-flex justify-content-between align-items-center my-5">
                    <h5>Total: {formatPrice(getTotalPrice())}</h5>
                    <Button variant="primary">Buy</Button>
                </div>
            )}
        </Container>
    );
};

export default CartPage;

