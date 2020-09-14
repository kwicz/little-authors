import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import CreateBook from "./CreateBook.component";
import EditBook from "./EditBook.component";
import BookList from "./BookList.component";
import Landing from "./Landing.component";
import AddPage from "./AddPage.component";
import ReadBook from "./ReadBook.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://k.solovewi.cz/" target="_blank" rel="noopener noreferrer">
              <img src="" width="30" height="30" alt="" />
            </a>
            <Link to="/" className="navbar-brand">Little Authors</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/home" className="nav-link">Home Page</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Book</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={BookList} />
          <Route path="/edit/:id" component={EditBook} />
          <Route path="/create" component={CreateBook} />
          <Route path="/addpage/:id" component={AddPage} />
          <Route path="/read/:id" component={ReadBook} />
        </div>
      </Router>

    );
  }
}

export default App;
