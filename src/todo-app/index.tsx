import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import TodoList from './TodoList';

const TodoApp = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(todo.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        content: todo
      }))
    }
    setTodo('');
  }
  return (
    <div style={{margin: '100px'}}>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">Add</button>
        <TodoList />
      </form>
    </div>
  )
};

export default TodoApp;
