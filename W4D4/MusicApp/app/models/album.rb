class Album < ActiveRecord::Base
  validates :name, :album_type, :band_id, presence: true

  belongs_to :band
end
