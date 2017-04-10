import React from 'react';
import TodoListContainer from './todo_list/todo_list_container.jsx';
//make sure to import react at top of files

//functional component, doesn't need a render function, using the jsx tags
//requires React
//components can be functional or class << react.component
const App = () => {
  return (
    <div>
      <h1>app meow</h1>
      <TodoListContainer />
    </div>
  );
};


export default App;
