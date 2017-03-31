class AlbumsController < ApplicationController
  before_action :require_login

  def new
    band = Band.find(params[:band_id])
    @bands= band ? [band] : Band.all

    render :new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to band_url(@album.band_id)
    else
      redirect_to new_album_url
    end
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def destroy
    album = Album.find(params[:id])
    album.destroy
    redirect_to band_url(album.band_id)

  end

  private
  def album_params
    params.require(:album).permit(:band_id, :name, :album_type)
  end
end
