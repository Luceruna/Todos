import React, { useState } from 'react';
import Form from './components/Form';
import Board from './components/Board';

let id = 0;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = (title, desc) => {
    setTodoList([...todoList, { title, desc, id, status: 'todo' }]);
    id++;
  }
  const switchTodoList = index => {
    console.log(`old todos is ${JSON.stringify(todoList)}`);
    todoList.forEach((c, i) => {
      console.log(`${index} === ${i}`)
      if (index === i) {
        if (c.status === 'todo') { c.status = 'prog'; }
        else if (c.status === 'prog') { c.status = 'done'; }
        else if (c.status === 'done') { c.status = 'todo'; }
      }
    });
    console.log(`new todos is ${JSON.stringify(todoList)}`);
    setTodoList([...todoList]);
  }
  return (
    <div>
      <Form add={addTodoList} />
      <Board cards={todoList} onclick={switchTodoList} />
    </div>
  );
}

export default App;
