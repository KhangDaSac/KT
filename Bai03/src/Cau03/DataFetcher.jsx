import { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Spinner, Col, Row } from 'react-bootstrap';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result.slice(0, 6));
        //setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <Container className="my-4 text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );

  return (
    <Container className="my-4">
      <h2>Fetched Data</h2>
      <Row>
        {data.map(item => (
          <Col key={item.id} xl={6} className='my-2'>
            <Card>
              <Card.Body className='m-2'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DataFetcher;