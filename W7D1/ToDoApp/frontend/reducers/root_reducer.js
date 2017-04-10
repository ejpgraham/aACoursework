import { combineReducers } from 'redux';
import todosReducer from './todo_reducer';

//combineReducers returns a reducer, you just need to have the
//key point to the result of the child reducers

const rootReducer = combineReducers({
  todos: todosReducer
});


export default rootReducer;
