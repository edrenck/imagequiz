import UserData from "./UserData";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

const registerUser = (form) => {
  form.preventDefault();
  let name = form.target.nameInput.value;
  let username = form.target.usernameInput.value;
  let password = form.target.passwordInput.value;

  if (!UserData.allUsers.has(username)) {
    const user = {};
    user.name = name;
    user.password = password;
    UserData.allUsers.set(username, user);
    console.log(UserData);
  }
};

let Registration = () => {
  return (
    <>
      <Form onSubmit={registerUser}>
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

export default Registration;
