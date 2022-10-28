import { ChangeEvent, useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

export type TodoItem = {
  todo: string;
  timeStamp: Date
}[]

function App() {



  const [text, setText] = useState('');
  const [list, setList] = useState<TodoItem>([]);
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const addItem = () => {

    if (text !== '') {
      setList((oldList) => [...oldList, { todo: text, timeStamp: new Date() }])
      setText('')
    }
  };



  return (
    <>
      <h1>TODOS</h1>
      <div className="card">
        <input value={text} onChange={onChangeText} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <TodoList list={list} />
    </>
  )
}

export default App
