import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Counter from "./Components/Counter/Counter";
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
// import rootReducer from "./store/root.reducer";
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";
import logger from "./store/middleware/logger";


const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}), applyMiddleware(logger))

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

// store -> counter
              // - actions | reducers
// store -> result
              // - actions | reducers