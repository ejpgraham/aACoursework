import React from 'react';

class TodoListItem extends React.Component {
  render(){
    return (<li>
      { this.props.todo.title } - { this.props.todo.body }
      <button> remove </button>
    </li>);
  }


}

export default TodoListItem;



// <input onClick= {removeTodo(todo)} type="submit" value="Remove" />
