class Api::TodosController < ApplicationController
  def show
    # the id will come from the url?
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def index
    @todos = Todo.all

    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo
  end

  def todo_params
    params.require(:todo).permits(:title, :body, :done)
  end
end
