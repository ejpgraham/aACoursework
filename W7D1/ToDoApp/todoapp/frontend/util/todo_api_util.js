export const getAllTodos = function(){
  return $.ajax({
     type: 'GET',
     url: "/api/todos"
  });
};

export const addTodo = function(todo){
  return $.ajax({
     type: 'POST',
     url: "/api/todos",
     data: {todo: todo}
  });
};

export const deleteTodo = function(todo){
  return $.ajax({
     type: 'DELETE',
     url: `/api/todos/${todo.id}`
  });
};
