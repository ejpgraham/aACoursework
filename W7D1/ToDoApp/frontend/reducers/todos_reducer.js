import { allTodos } from './selectors.js';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';

const _initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

// QUESTION: looping through the todos, how do we know what data type comes in?
// QUESTION: do we give it the id that is being passed in?, how do we dynamically update that?
//we wont really refer to the state explicitly after tehe first call where we set initial state
const todosReducer = (state = _initialState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS: {
      newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    }
    case RECEIVE_TODO: {

      newState = Object.assign({}, state);
      const temp = Object.assign(newState, { [action.todo.id]: action.todo});
      return temp;
    }
      //This time, return a new state object with only action.todo added/replaced.
    default:
      return state;
  }
};

export default todosReducer;
