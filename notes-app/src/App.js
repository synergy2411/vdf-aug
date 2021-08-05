import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./Components/Header/Header";
import ProductDetail from "./pages/ProductDetail";

// import ClassBased from './Components/Playground/ClassBased/ClassBasedComp';
// import ErrorBoundary from './Components/Playground/ClassBased/ErrorBoundary';
// import WrappedComp from './Components/Playground/Hoc/WrappedComp';
// import Notes from './Components/Notes/Notes';
// import LoginForm from './Components/Playground/LoginForm/LoginForm';
// import PropTypeDemo from './Components/Playground/PropTypes/PropTypeDemo';
// import SideEffect from './Components/Playground/SideEffect/SideEffect';
// import StateContext from './context/state-context';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
        <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// our-domain.com/welcome
// our-domain.com/products

// <ErrorBoundary>
//       <ClassBased />
//       <WrappedComp />
//     </ErrorBoundary>

// <p className="display-4 text-center">My Notes App</p>
// <StateContext.Provider value= {{
//   token : "My New Token",
//   users : null
// }}>
//   <Notes />
//  </StateContext.Provider>
//  {/*<LoginForm />*/}
//  {/*<PropTypeDemo email={"test@test.com"} age={123} user = {user}/>*/}
//  <SideEffect />
