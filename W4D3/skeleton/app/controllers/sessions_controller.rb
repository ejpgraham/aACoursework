class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(session_params)
    if log_in(user)
      redirect_to cats_url
    else
      render :new
    end
  end


  private
  def session_params
    params.require(:users).permit(:username, :password)
  end
end
