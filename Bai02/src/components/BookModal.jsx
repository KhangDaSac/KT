import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const BookModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: '', 
    mealPreference: '', 
    agreeTerms: false, 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert('Booking successful! We will contact you soon.');
    onHide();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(data => ({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="booking-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Thời gian</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số người</Form.Label>
            <Form.Select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
              <option value="5">5 persons</option>
              <option value="6">6 persons</option>
              <option value="7+">7+ persons</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Yêu cầu đặc biệt</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Any special requests (e.g., seating preference)?"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Meal Preference</Form.Label>
            <div>
              <Form.Check
                inline
                label="Vegetarian"
                type="radio"
                name="mealPreference"
                value="vegetarian"
                checked={formData.mealPreference === 'vegetarian'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Non-Vegetarian"
                type="radio"
                name="mealPreference"
                value="non-vegetarian"
                checked={formData.mealPreference === 'non-vegetarian'}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="No Preference"
                type="radio"
                name="mealPreference"
                value="no-preference"
                checked={formData.mealPreference === 'no-preference'}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="dark" type="submit">
              Confirm booking
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;