import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    const items = this.props.todos.map( (todo) => {
      return (
        <div>
          <TodoListItem key={ todo.id } todo={ todo } destroyTodo= { this.props.destroyTodo }/>
        </div>
      );
    });
    return(
        <div>
          <TodoForm createTodo={ this.props.createTodo } errors={ this.props.errors }/>

          <ul className="list">
            { items }
          </ul>
        </div>
    );
  }

}





export default TodoList;
// const TodoList = (props) => {
//
//   const items = props.todos.map( (todo) => {
//     return (
//       <div>
//         <TodoListItem key={ todo.id } todo={ todo } removeTodo= { props.removeTodo }/>
//       </div>
//     );
//   });
//
//   return (
//     <div>
//       <TodoForm receiveTodo={ props.receiveTodo }/>
//
//       <ul className="list">
//         { items }
//       </ul>
//     </div>
//   );
// };
