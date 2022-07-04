import React from 'react';
import { useSelector } from 'react-redux';
import { selectorTodoList } from '../redux/selector';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useSelector(selectorTodoList);
  console.log(todoList);
  return (
    <ul>
      {todoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  );
};

export default TodoList;
