import React from 'react';
import './App.css';
import Notes from './Components/Notes/Notes';

function App() {

  return (
    <div className = "container">
     <p className="display-4 text-center">My Notes App</p>
     <Notes />
    </div>
  );
}

export default App;
