import React from 'react';
import { Todo } from '../interfaces';

interface props {
  todo: Todo;
};

const TodoItem: React.FC<props> = ({todo}) => (
  <li>
    {todo.content}
  </li>
);

export default TodoItem;
