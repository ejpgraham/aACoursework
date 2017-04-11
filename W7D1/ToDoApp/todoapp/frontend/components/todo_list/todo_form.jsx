import React from 'react';
import { uniqueID } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {title: "", body: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTodo = this.props.createTodo.bind(this);
  }

  handleChange(type) {

    // const type = e.currentTarget.name;
    // this.setState({ type: e.currentTarget.value });

      // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
      //computed keys
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };


  }

  handleSubmit(e){
    e.preventDefault();

    let newItem = {
      // id: uniqueID(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    this.createTodo(newItem).then(() => this.setState({ title: "", body: "" }));

  }

  render(){
    let errors = this.props.errors;
    return (
      <form onSubmit= { this.handleSubmit }>
        <h4>Add Todo</h4>
        <label>Title: </label>
        <input onChange={ this.handleChange("title") } name="title" type="text" value={ this.state.title } />
        <label>Body: </label>
        <input onChange={ this.handleChange("body") } name="body" type="text" value={ this.state.body } />
        <input type="submit" value="+ todo" className="submit" />
          <ul className="errors">
            {errors.map((error) => {
              return (
                <li className="error" key={ error }>{ error }</li>
              );
            })}
          </ul>
      </form>

    );
  }
}

export default TodoForm;
