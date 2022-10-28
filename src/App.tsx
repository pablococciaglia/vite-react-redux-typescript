import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux'
import TodoList from './components/TodoList';
import { addTodoAction } from './actions/action';
import './App.css';

export type TodoItem = {
  todo: string;
  timeStamp: Date
}[]

const App: FC = (): ReactElement => {
  const dispatch = useDispatch()


  const [text, setText] = useState('');
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addItem = () => {
    if (text !== '') {
      dispatch(addTodoAction({ todo: text, timeStamp: new Date() }))
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
      <TodoList />
    </>
  )
}

export default App
