import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will respond as soon as possible.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Container className="py-5">
            <div className="contact-form p-4 bg-light rounded shadow-sm mx-5">
                <h3 className="mb-4">Contact us</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Enter your subject"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Enter your message"
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="w-100"
                    >
                        Send
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Contact;
