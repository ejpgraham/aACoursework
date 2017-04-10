import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

const TodoList = (props) => {

  const items = props.todos.map( (todo) => {
    return (
      <div>
        <TodoListItem key={ todo.id } todo={ todo } removeTodo= { props.removeTodo }/>
      </div>
    );
  });

  return (
    <div>
      <ul>
        { items }
      </ul>
      <TodoForm receiveTodo={ props.receiveTodo }/>
    </div>
  );
};

export default TodoList;

// <input onClick= {removeTodo(todo)} type="submit" value="Remove" />
