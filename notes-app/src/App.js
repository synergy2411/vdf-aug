import React from 'react';
import './App.css';
import Notes from './Components/Notes/Notes';
import LoginForm from './Components/Playground/LoginForm/LoginForm';
import PropTypeDemo from './Components/Playground/PropTypes/PropTypeDemo';

let user = {firstName : "Foo"}
function App() {

  return (
    <div className = "container">
     <p className="display-4 text-center">My Notes App</p>
     {/* <Notes /> */}
     {/*<LoginForm />*/}
     <PropTypeDemo email={"test@test.com"} age={123} user = {user}/>
    </div>
  );
}

export default App;
