import React, { Component } from "react";
import { render } from "react-dom";
import StudentLandingPage from "./StudentLandingPage.js";
import StudentDetailPage from "./StudentDetailPage.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={StudentLandingPage} />
          <Route path="/student/" component={StudentDetailPage} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
