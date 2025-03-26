import { useState, useMemo } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';

const UseMemoDemo = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0); 


  const sumNumbers = useMemo(() => {
    console.log(`Calculating`);
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }, [start, end]);

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>useMemo Demo: Sum</Card.Title>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Start Number:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                value={start}
                onChange={(e) => setStart(Number(e.target.value))}
                placeholder="Enter start number"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>End Number:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                value={end}
                onChange={(e) => setEnd(Number(e.target.value))}
                placeholder="Enter end number"
              />
            </Col>
          </Form.Group>

          <Card.Text>
            {sumNumbers}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UseMemoDemo;