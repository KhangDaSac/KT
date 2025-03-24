import React from 'react';
import { Button, Modal, ListGroup, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useItems, } from '../context/ItemsContext';


const Cart = ({ show, onHide }) => {
    const { orders, removeFromCart, updateQuantity, getTotalPrice, getTotalQuantity } = useCart();
    const { formatPrice, buy } = useItems();

    return (
        <>
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px' }}
                                            className="rounded my-1"
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
                                        <span className="mx-2">{item.quantity}</span>
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
                                            Remove
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Modal.Body>
                {getTotalQuantity() > 0 && (
                    <Modal.Footer className="justify-content-between">
                        <h5>Total: {formatPrice(getTotalPrice())}</h5>
                        <Button variant="primary" onClick={buy}>Buy</Button>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default Cart;
