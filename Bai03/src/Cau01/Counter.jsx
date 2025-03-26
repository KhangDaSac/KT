import { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Counter: {count}</Card.Title>
          <div className="d-flex justify-content-center gap-2">
            <Button variant="primary" onClick={handleIncrease}>
              Increase
            </Button>
            <Button variant="danger" onClick={handleDecrease}>
              Decrease
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Counter;