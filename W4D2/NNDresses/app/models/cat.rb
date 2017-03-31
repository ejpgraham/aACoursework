# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Cat < ActiveRecord::Base
  COLORS = [
    'brown',
    'black',
    'white'
  ]

  validates :birth_date, :name, presence: true
  validates :color, presence: true, inclusion: { in: COLORS, message: "%{value} is not a valid color" }
  validates :sex, presence: true, inclusion: { in: %w(M F), message: "Invalid sex" }

  has_many :rental_requests,
    class_name: "CatRentalRequest",
    primary_key: :id,
    foreign_key: :cat_id,
    dependent: :destroy

  def age
    ((Date.today - birth_date)/365.25).to_i
  end

end
