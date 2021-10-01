import UserData from "./UserData";
import { Form, Col, FloatingLabel, Button } from "react-bootstrap";
import "../Styles/Form.css";

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

const Registration = () => {
  return (
    <>
      <h1>Register to our website below.</h1>
      <Form onSubmit={registerUser} className="justify-content-center">
        <div className="folderContainer">
          <Col md>
            <FloatingLabel controlId="nameInput" label="Name">
              <Form.Control required placeholder="Name" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="usernameInput" label="Username">
              <Form.Control required placeholder="Username" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="passwordInput" label="Password">
              <Form.Control required type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button type="submit">Register</Button>
            <Button>Login instead</Button>
          </Col>
        </div>
      </Form>
    </>
  );
};

export default Registration;
