class UsersController < ApplicationController
  before_action :require_not_logged_in

  def new
    render :new
  end

  def create
    user = User.new(user_params)

      if user.save!
        log_in(user)
        redirect_to cats_url
      else
        render :new
      end
  end




  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
