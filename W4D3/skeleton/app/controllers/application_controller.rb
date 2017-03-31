class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    # look into this!!
    User.find_by(session_token: session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    if !logged_in?
      redirect_to new_session_url
    end
  end

  def require_not_logged_in
    if logged_in?
      redirect_to cats_url
    end
  end
end
