class SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  before_action :require_not_logged_in, only: [:new, :create]

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      log_in(user)
      redirect_to cats_url
    else
      redirect_to new_session_url
    end
  end

  def destroy
    # debugger
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
    redirect_to new_session_url
  end

end
