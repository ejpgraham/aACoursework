class AlbumsController < ApplicationController

  def new
    @bands = Band.all
    render :new
  end

  def create
    album = Album.new(album_params)
    if album.save
      redirect_to band_url(:band_id)
    else
      redirect_to new_album_url
    end
  end

  private
  def album_params
    params.require(:album).permit(:band_id, :name, :album_type)
  end
end
