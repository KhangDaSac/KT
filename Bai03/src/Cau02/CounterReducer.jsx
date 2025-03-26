import { useReducer } from 'react';
import { Container, Button, Card, ListGroup } from 'react-bootstrap';

const initialState = { count: 0, dispatchLog: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + 1, dispatchLog: [...state.dispatchLog, 'INCREASE'] };
    case 'DECREASE':
      return { ...state, count: state.count - 1, dispatchLog: [...state.dispatchLog, 'DECREASE'] };
    case 'RESET':
      return { ...state, count: 0, dispatchLog: [...state.dispatchLog, 'RESET'] };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Counter with useReducer: {state.count}</Card.Title>
          <div className="d-flex justify-content-center gap-2 mb-3">
            <Button variant="primary" onClick={() => dispatch({ type: 'INCREASE' })}>
              Increase
            </Button>
            <Button variant="danger" onClick={() => dispatch({ type: 'DECREASE' })}>
              Decrease
            </Button>
            <Button variant="secondary" onClick={() => dispatch({ type: 'RESET' })}>
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CounterReducer;