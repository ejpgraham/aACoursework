Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  #format: :json means instead of looking for a html view, look for a json view
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :update, :create, :destroy]
  end

end
