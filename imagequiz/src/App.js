import "./Styles/App.css";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { Container } from "react-bootstrap";

function App() {
  return (
    <HashRouter>
      <Layout></Layout>
      <Container>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
