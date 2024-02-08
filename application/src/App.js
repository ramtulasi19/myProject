import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import {useEffect} from "react";



function App() {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
