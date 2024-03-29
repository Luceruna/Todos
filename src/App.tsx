import { useState } from 'react';
import Form from './components/Form.tsx';
import Board from './components/Board.tsx';

let id = 0;

/** エレメント作成 */
const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  /**
   * Todoタスクを追加する
   * @param {string} title タイトル
   * @param {string} desc 詳細
   */
  const addTodoList = (title: string, desc: string) => {
    setTodoList([...todoList, { title, desc, id, status: 'todo' }]);
    id++;
  };

  /**
   * Todoタスクの状態を変化させる
   * @param {number} index Todoタスクのid
   */
  const switchTodoList = (index: number) => {
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
    <>
      <Form add={addTodoList} />
      <Board cards={todoList} onclick={switchTodoList} />
    </>
  );
};

export default App;
