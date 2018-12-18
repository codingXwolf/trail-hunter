import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ContentRouter from './ContentRouter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalStore from './reducers/index';
import  './App.css';

const store = createStore(globalStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {

  render() {
    return (
       <Provider store={store}>
       <BrowserRouter>
       <ContentRouter/>
       </BrowserRouter>
       </Provider>
    )
  }
}

export default App;
