import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


const NotFound = () => {
    return (
        <div className="not-found-container">
            <Container className="text-light py-5 bg-secondary">
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1 className="display-3 fw-bold mb-4">404</h1>
                        <p className="lead mb-4">
                            Trang không tồn tại
                        </p>
                        <Button
                            as={Link}
                            to="/"
                            variant="primary"
                            size="lg"
                            className="me-3"
                        >
                            Quay lại trang chủ
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
