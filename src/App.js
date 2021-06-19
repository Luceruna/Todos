import { useState } from 'react';
import Form from './components/Form';
import Board from './components/Board';

let id = 0;

/**
 * エレメント作成
 * @returns エレメント 
 */
const App = () => {
  const [todoList, setTodoList] = useState([]);

  /**
   * Todoタスクを追加する
   * @param {string} title タイトル
   * @param {string} desc 詳細
   */
  const addTodoList = (title, desc) => {
    setTodoList([...todoList, { title, desc, id, status: 'todo' }]);
    id++;
  };

  /**
   * Todoタスクの状態を変化させる
   * @param {number} index Todoタスクのid
   */
  const switchTodoList = index => {
    todoList.forEach(c => {
      if (index === c.id) {
        if (c.status === 'todo') { c.status = 'prog'; }
        else if (c.status === 'prog') { c.status = 'done'; }
        else if (c.status === 'done') { c.status = 'todo'; }
      }
    });
    setTodoList([...todoList]);
  };

  return (
    <div>
      <Form add={addTodoList} />
      <Board cards={todoList} onclick={switchTodoList} />
    </div>
  );
};

export default App;
