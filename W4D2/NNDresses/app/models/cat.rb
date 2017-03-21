class Cat < ActiveRecord::Base
  COLORS = [
    'brown',
    'black',
    'white'
  ]

  validates :birth_date, :name, presence: true
  validates :color, presence: true, inclusion: { in: COLORS, message: "%{value} is not a valid color" }
  validates :sex, presence: true, inclusion: { in: %w(M F), message: "Invalid sex" }

  def age
    ((Date.today - birth_date)/365.25).to_i
  end

end
