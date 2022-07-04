import { Action, InitState} from '../interfaces';
import { ADD_TODO } from './actions';

const initState: InitState = {
  todoList: [],
};

const rootReducer = (state = initState, action: Action) => {
  switch(action.type) {
    case ADD_TODO: return {
      ...state,
      todoList: [...state.todoList, action.payload]
    }
    default: return state;
  }
}

export default rootReducer;
