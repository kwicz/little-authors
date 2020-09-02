import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Little Authors</h2>
        </div>
      </Router>
    );
  }
}

export default App;
