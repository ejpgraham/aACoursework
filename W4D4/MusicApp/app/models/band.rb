# == Schema Information
#
# Table name: bands
#
#  id   :integer          not null, primary key
#  name :string           not null
#

class Band < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :albums, dependent: :destroy

  
end
