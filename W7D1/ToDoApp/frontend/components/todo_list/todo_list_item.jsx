import React from 'react';

class TodoListItem extends React.Component {
  render(){
    return (<li className="todo-item">
      { this.props.todo.title } - { this.props.todo.body }
      <button onClick={ this.handleRemoval.bind(this) }> remove </button>
    </li>);
  }

  handleRemoval(){
    this.props.removeTodo(this.props.todo);
  }


}

export default TodoListItem;



// <input onClick= {removeTodo(todo)} type="submit" value="Remove" />
