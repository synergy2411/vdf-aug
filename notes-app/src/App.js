import React from 'react';
import './App.css';
import Notes from './Components/Notes/Notes';
import LoginForm from './Components/Playground/LoginForm/LoginForm';
import PropTypeDemo from './Components/Playground/PropTypes/PropTypeDemo';
import SideEffect from './Components/Playground/SideEffect/SideEffect';
import StateContext from './context/state-context';

let user = {firstName : "Foo"}
function App() {

  return (
    <div className = "container">
     <p className="display-4 text-center">My Notes App</p>
    <StateContext.Provider value= {{
      token : "My New Token",
      users : null
    }}>
      <Notes />
     </StateContext.Provider>
     {/*<LoginForm />*/}
     {/*<PropTypeDemo email={"test@test.com"} age={123} user = {user}/>*/}
     <SideEffect />
    </div>
  );
}

export default App;
