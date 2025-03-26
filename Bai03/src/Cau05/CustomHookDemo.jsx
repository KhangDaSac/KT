import React from 'react';
import { Container, Button, Card } from 'react-bootstrap'
import { useCounter } from './CustomHook'

const CustomHookDemo = () => {
    const [count, increment, decrement, reset] = useCounter();
    return (
        <Container className="my-4">
          <Card>
            <Card.Body>
              <Card.Title>Counter: {count}</Card.Title>
              <div className="d-flex justify-content-center gap-2">
                <Button variant="primary" onClick={increment}>
                  Increase
                </Button>
                <Button variant="danger" onClick={decrement}>
                  Decrease
                </Button>
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
    );
}

export default CustomHookDemo;
