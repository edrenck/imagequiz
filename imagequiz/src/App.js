import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Layout>
    </HashRouter>
  );
}

export default App;
