import "../Styles/Home.css";
import { Row, Col, Card } from "react-bootstrap";
import flowers from "../data";
let Home = () => {
  return (
    <>
      <Row>
        <h1>Welcome to imagequiz</h1>
      </Row>
      <Row className="justify-content-center">
        {flowers.map((flower) => (
          <Col sm="6" lg="4" key={flower.name}>
            <Card>
              <Card.Img variant="top" src={flower.picture} />
              <Card.Body>
                <Card.Title>{flower.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
