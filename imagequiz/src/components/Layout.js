import { Container, Nav, Navbar } from "react-bootstrap";
import "./Layout.css";

let Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="#/">ImageQuiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/login">Login</Nav.Link>
              <Nav.Link href="#/registration">Registration</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
