import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./components/root/Root";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Root} />
      </Switch>
    </Router>
  );
}

export default App;
