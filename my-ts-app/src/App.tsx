import React, {useState} from 'react';
import NewTodo from './Component/Todos/NewTodo';
import Todos from './Component/Todos/Todos';
import Todo from './model/todo';


function App() {
  // const todos = ["Hello React", "Hello Typescript"]
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Hello React"),
    new Todo("Welcome to TypeScript")
  ])
  const addItem = (value : string) => {
    setTodos(prevState => {
      return [...prevState, new Todo(value)]
    })
  }
  return (
    <div>
     <h2>Getting started...</h2>
     <Todos items={todos} />
     <NewTodo onAddItem = {addItem}/>
    </div>
  );
}

export default App;
