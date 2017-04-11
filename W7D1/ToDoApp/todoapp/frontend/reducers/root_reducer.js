import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';
//combineReducers returns a reducer, you just need to have the
//key point to the result of the child reducers

const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorReducer
});


export default rootReducer;
