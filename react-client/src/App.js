import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/userInfo';
import ContentRouter from './ContentRouter';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <ContentRouter/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
