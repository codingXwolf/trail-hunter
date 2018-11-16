import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ContentRouter from './ContentRouter';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <ContentRouter/>
        </BrowserRouter>
    );
  }
}

export default App;
