import { Modal, Col, FloatingLabel, Form, Button } from "react-bootstrap";
import UserData from "./UserData";
import "../Styles/Form.css";
import { useState } from "react";
import api from "./../communication/api";

const Login = ({ authenticated }) => {
  const loginUser = (form) => {
    form.preventDefault();
    let username = form.target.usernameInput.value;
    let password = form.target.passwordInput.value;

    let account = api
      .login(username, password)
      .then((x) => {
        x.isvalid
          ? localStorage.setItem("email", username)
          : console.log("invalid login");
        return x.isvalid;
      })
      .then((x) => {
        if (x) {
          setMessage(`User ${account.email} just logged in`);
          handleShow();
          authenticated();
        } else {
          setMessage(`Login/Password incorrect`);
          handleShow();
        }
      });
  };
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1>Login into your ImageQuiz account</h1>
      <Form
        onSubmit={(form) => loginUser(form)}
        className="justify-content-center"
      >
        <div className="folderContainer">
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
          <Col className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
            <Button>Forgot Password</Button>
          </Col>
        </div>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default Login;
