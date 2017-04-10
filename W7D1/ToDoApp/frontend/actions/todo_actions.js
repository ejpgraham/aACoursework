export const RECEIVE_TODOS = "RECEIVE_TODOS";


export const RECEIVE_TODO = "RECEIVE_TODO";

//This action lets our reducer know to reset the list of todos and, as such,
//will also need to pass along a new set of todos.
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};
