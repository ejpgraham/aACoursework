export const getAllTodos = function(){
  return $.ajax({
     type: 'GET',
     url: "/api/todos"
  });
};
