import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom"

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  
  <Provider store={store}>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

