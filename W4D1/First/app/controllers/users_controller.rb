class UsersController < ApplicationController

  def index
    render text: "I'm in the index action!"
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def destroy
    user = User.find(params[:id])
    user.delete

    render json: User.all
  end

  def create
    user = User.new(params_check)
    if user.save
      render json: user
    else
      render(
        json: user.errors.full_messages, status: :unprocessable_entity
      )
    end
  end

  def edit
  end

  def new
  end

  def update
    user = User.find(params[:id])
    user.update(params_check)
    render json: user
  end

  private

  def params_check
    params[:user].permit(:name, :email)
  end
end
