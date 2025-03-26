import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }

        setValidated(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h2 className="display-6 text-uppercase mb-3" style={{ color: '#ca9f33' }}>Contact Us</h2>
                <h3 className="display-5 text-uppercase mb-4">GET IN TOUCH</h3>
            </div>

            <Row className="justify-content-center g-4">
                <Col md={5}>
                    <div className="p-4 bg-dark text-light rounded shadow">
                        <h4 className="mb-4 fw-bold text-warning">Contact Information</h4>
                        <div className="mb-4">
                            <p className="mb-2"><strong>Address:</strong> 123 Cake Street, London, UK</p>
                            <p className="mb-2"><strong>Phone:</strong> +44 123 456 7890</p>
                            <p className="mb-2"><strong>Email:</strong> info@cakezone.com</p>
                            <p className="mb-2"><strong>Hours:</strong> Mon - Fri: 9AM - 8PM</p>
                        </div>
                        <h5 className="mb-3 fw-bold text-warning">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-light fs-5">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-light fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </Col>

                <Col md={7}>
                    <div className="p-4 bg-light rounded shadow">
                        <h4 className="mb-4 fw-bold">Send Us A Message</h4>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom03">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Enter subject"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a subject.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom04">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Button
                                type="submit"
                                variant="warning"
                                className="w-100 text-white"
                            >
                                Send Message
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
