import "../Styles/Home.css";
import { Row, Col, Card } from "react-bootstrap";
import api from "../communication/api";
import { useEffect, useState } from "react";

let Home = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    if (flowers.length > 0) return;
    api
      .getFlowers()
      .then((x) => setFlowers(x))
      .catch((e) => console.log(e));
  }, []);
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
                <Card.Title href={`#/quiz/${flower.name}`}>
                  {flower.name}
                </Card.Title>
                <Card.Link href={`#/quiz/${flower.name}`}>Go to Quiz</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
