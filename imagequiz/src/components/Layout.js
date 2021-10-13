import { Container, Nav, Navbar } from "react-bootstrap";
import "../Styles/Layout.css";

const Layout = ({ user, loggedOff }) => {
  const checkUser = () => {
    if (user) {
      return (
        <>
          <Nav.Link onClick={loggedOff}>Logoff</Nav.Link>
          <Nav.Link>Welcome {user}</Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link href="#/login">Login</Nav.Link>
          <Nav.Link href="#/registration">Registration</Nav.Link>
        </>
      );
    }
  };
  return (
    <>
      <Navbar expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="#/">ImageQuiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#/">Home</Nav.Link>
              {checkUser()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Layout;
