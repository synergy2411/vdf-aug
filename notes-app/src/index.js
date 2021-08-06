import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Counter from "./Components/Counter/Counter";
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./store/root.reducer";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  ,
  document.getElementById('root')
);

// <Router>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Router>