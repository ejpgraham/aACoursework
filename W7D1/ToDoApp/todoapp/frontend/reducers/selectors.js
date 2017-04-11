// Selectors are "getter" methods for the application state.
//They receive the state as an argument and return a subset of the state data
//formatted in a specific way. We will explore them in more detail but for now all
//we need is a function to transform an object filled with todos
//into an array for easy consumption by our components.

// QUESTION: how would I sort these? Are selectors where you would sort to populate this?
//yes, works this way with backend too
export const allTodos = (state) => {
  return Object.keys(state.todos).map((id) => state.todos[id]);

};
//test
// window.allTodos = allTodos;
// window.allTodos(window.store.getState());
