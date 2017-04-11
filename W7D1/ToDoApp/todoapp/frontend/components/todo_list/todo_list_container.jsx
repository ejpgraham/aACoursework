import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos, createTodo, destroyTodo } from '../../actions/todo_actions';



const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    // removeTodo: (todo) => dispatch(removeTodo(todo)),
    destroyTodo: (todo) => dispatch(destroyTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
  };
};

//connect is doing the subscribing to changes
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
