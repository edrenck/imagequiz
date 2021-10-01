import { Container, Nav, Navbar } from "react-bootstrap";
import "../Styles/Layout.css";
import UserData from "./UserData";

const checkUser = () => {
  let user = UserData.currentUser;
  if (user) {
    return (
      <>
        <Nav.Item>Welcome {UserData.allUsers.get(user).name}</Nav.Item>
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

const Layout = () => {
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
