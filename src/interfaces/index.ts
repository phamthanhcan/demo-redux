export interface Todo {
  id: number;
  content: string
};

export interface Action {
  type: string;
  payload: Todo
};

export interface InitState {
  todoList: Todo[];
};
