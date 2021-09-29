import { Row, Col, Image } from "react-bootstrap";
import flowers from "./data";
let Home = () => {
  return (
    <>
      <Row>
        <h1>Welcome to imagequiz</h1>
      </Row>
      <Row>
        {flowers.map((flower) => (
          <Col>
            <h2>{flower.name}</h2>
            <Image src={flower.picture} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
