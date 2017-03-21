# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime
#  updated_at :datetime
#

class CatRentalRequest < ActiveRecord::Base
  STATUSES = [
    "PENDING",
    "APPROVED",
    "DENIED"
  ]
  validates :cat_id, :start_date, :end_date, presence:true
  validates :status, presence:true, inclusion: {in: STATUSES, message: "Invalid status" }
  validate :overlapping_approved_requests

  belongs_to :cat,
    class_name: 'Cat',
    primary_key: :id,
    foreign_key: :cat_id

  private
  def overlapping_requests
    result = []
    list = CatRentalRequest.where('cat_id = ?', self.cat_id)
    list.each do |other|
      result << other if !(self.end_date < other.start_date || other.end_date < self.start_date)
    end
    result
  end

  def overlapping_approved_requests
    result = []
    overlapping_requests.each do |request|
      if request.status == "APPROVED"
        errors[:base] << "Cannot overlap approved request"
      end
    end
    result
  end

  # cr = CatRentalRequest.new(cat_id: 7, start_date: '2018/01/02', end_date: '2018/01/06')
end
