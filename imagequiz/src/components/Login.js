import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";
import UserData from "./UserData";

let Login = () => {
  return (
    <>
      <h1>Login into your ImageQuiz account</h1>
      <Form>
        <Row>
          <Col md>
            <FloatingLabel controlId="nameInput" label="Name">
              <Form.Control required palceholder="Name" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="usernameInput" label="Username">
              <Form.Control required palceholder="Username" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="passwordInput" label="Password">
              <Form.Control required type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col className="sm-12">
            <Button variant="danger" type="submit">
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Login;
