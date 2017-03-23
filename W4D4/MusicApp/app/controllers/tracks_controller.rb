class TracksController < ApplicationController
  before_action :require_login

  def new
    album = Album.find(params[:album_id])
    @albums= album ? [album] : Album.all
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to album_url(@track.album_id)
    else
      redirect_to new_track_url
    end
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    redirect_to album_url(@track.album_id)
  end

  private

  def track_params
    params.require(:track).permit(:album_id, :name, :track_type, :lyrics)
  end

end
