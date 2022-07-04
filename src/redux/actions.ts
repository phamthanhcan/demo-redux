import { Todo } from '../interfaces';

export const ADD_TODO = 'addTodo';

export const addTodo = (data: Todo) => (
  {
    type: ADD_TODO,
    payload: data
  }
);
