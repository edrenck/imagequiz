import { Container, Nav, Navbar } from "react-bootstrap";

let Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="lg">{children}</Container>
    </>
  );
};

export default Layout;
