class CatRentalRequestsController < ApplicationController
  def index
    render json: CatRentalRequest.all
  end

  def new
    @cats = Cat.all
    render :new
  end

  def create
    @cat = CatRentalRequest.new(cat_rental_request_params)
    if @cat.save
      redirect_to cat_rental_requests_url
    else
      index
    end
  end

  private

  def cat_rental_request_params
    params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
  end
end
