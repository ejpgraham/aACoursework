import React from 'react';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {hidden: true};
  }
  render(){
    return (<li className="todo-item">
      <div className = "todo-toggler" onClick={ this.toggleShow.bind(this) }>

         <h4>{ this.state.hidden ? '+' : '-'} { this.props.todo.title } </h4>
      </div>

      <div className = { this.state.hidden ? 'hidden' : 'details'}>
      { this.props.todo.body }
      <br />
      <button onClick={ this.handleRemoval.bind(this) }> remove </button>
      </div>
    </li>);
  }

  handleRemoval(){
    this.props.removeTodo(this.props.todo);
  }

  toggleShow(){
    console.log("hi");
    let temp;
    if (this.state.hidden === false){
      temp = true;
    }else{
      temp = false;
    }
    this.setState({hidden: temp });

  }

}

export default TodoListItem;



// <input onClick= {removeTodo(todo)} type="submit" value="Remove" />
