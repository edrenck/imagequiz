import "./Styles/App.css";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { Container } from "react-bootstrap";
import Quiz from "./components/Quiz";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const authenticated = () => {
    console.log("authenticated");
    setUser(localStorage.getItem("user"));
  };

  const loggedOff = () => {
    localStorage.clear();
    setUser(undefined);
  };

  return (
    <HashRouter>
      <Layout user={user} loggedOff={loggedOff}></Layout>
      <Container>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login authenticated={authenticated} />
        </Route>
        <Route path="/quiz/:quizName">
          <Quiz />
        </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
