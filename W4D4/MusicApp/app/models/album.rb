# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  album_type :string           not null
#  band_id    :integer          not null
#

class Album < ActiveRecord::Base
  validates :name, :album_type, :band_id, presence: true

  belongs_to :band
  has_many :tracks, dependent: :destroy

  ALBUM_TYPE = ["Studio", "Live"]
end
