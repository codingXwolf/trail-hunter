import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisterForm from './Register.js';
import Users from './Users.js';


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const AppRouter = () => (
  <Router>
    <div className="bs-component">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Trail Hunter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
            <li>
              <Link to="/RegisterForm">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/Users" component={Users} />
      <Route path="/RegisterForm" component={RegisterForm}/>
    </div>
  </Router>
);

export default AppRouter;
