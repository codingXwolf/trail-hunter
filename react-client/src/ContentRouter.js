import React, { Component } from "react";
import { Route, Switch} from 'react-router-dom';
// import { BrowserRouter as Router} from "react-router-dom";
// import RegisterForm from './components/Register.js';
import TrailsList from './components/TrailsList';
import LandingPage from './components/LandingPage';
import TrailListForm from './components/TrailListForm';

export default class ContentRouter extends Component {

render() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/TrailListForm/:id?" component={TrailListForm} />
                <Route path="/TrailsList" component={TrailsList} />	
            </Switch>
        </React.Fragment>
    )
}
}
