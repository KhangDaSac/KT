import { useState, memo } from 'react';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';

const NumberCard = memo(({ isEven }) => {
  console.log('Rendering NumberCard');
  return (
    <Card
      className={isEven ?  "bg-primary" : "bg-danger"}
    >
      <Card.Body>
        <Card.Title>This number is {isEven ? 'Even' : 'Odd'}</Card.Title>
      </Card.Body>
    </Card>
  );
});

const ReactMemoDemo = () => {
  const [number, setNumber] = useState(0);

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>React.memo</Card.Title>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Enter a Number:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                placeholder="Enter a number"
              />
            </Col>
          </Form.Group>
          <NumberCard isEven={number%2 == 0} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReactMemoDemo;