import React, { Component } from "react";
import { Route, Switch, NavLink,} from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import RegisterForm from './components/Register.js';
import TrailsList from './components/TrailsList';
import Home from './components/Home';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

export default class ContentRouter extends Component{

render() {
    return (
        <React.Fragment>
            <Switch>
            <Router>
                <div className="bs-component">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <h4 className="navbar-brand">Trail Hunter</h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul>
                                <li>
                                    <NavLink to="/Home">Home</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/about/">About</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/TrailsList">Trails</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/RegisterForm">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/Home" component={Home} />
                    {/* <Route path="/About" component={About} /> */}
                    <Route path="/TrailsList" component={TrailsList} />
                    <Route path="/RegisterForm" component={RegisterForm} />
                    <Route path="/Login" component={Login} />

                </div>
            </Router>
            </Switch>
        </React.Fragment>
    )
}
}