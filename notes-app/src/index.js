import "bootstrap/dist/css/bootstrap.min.css";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import logger from "./store/middleware/logger";
// import rootReducer from "./store/root.reducer";
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";

const Counter = React.lazy(() => import("./Components/Counter/Counter"))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  ctr : counterReducer,
  res : resultReducer
}), composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
  <Suspense fallback={<p>Loading...</p>}>
    <Counter />
    </Suspense>
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