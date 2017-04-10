import React from 'react';
import { uniqueID } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {title: "", body: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveTodo = this.props.receiveTodo.bind(this);
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
      id: uniqueID(),
      title: this.state.title,
      body: this.state.body
    };

    this.receiveTodo(newItem);
    this.setState({ title: "", body: "" });
  }

  render(){
    return (
      <div>
        <h4>add todo</h4>
        Title: <input onChange={ this.handleChange("title") } name="title" type="text" value={ this.state.title } />
        <br />
        Body: <input onChange={ this.handleChange("body") } name="body" type="text" value={ this.state.body } />
        <br />
        <input onClick= { this.handleSubmit } type="submit" value="+ todo" />
      </div>
    );
  }
}

export default TodoForm;
