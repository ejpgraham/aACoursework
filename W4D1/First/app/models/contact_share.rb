# == Schema Information
#
# Table name: contact_shares
#
#  id         :integer          not null, primary key
#  contact_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ContactShare < ActiveRecord::Base
  #Nancy
  belongs_to :contact,
    class_name: 'Contact',
    primary_key: :id,
    foreign_key: :contact_id

  #Donald
  belongs_to :shared_with,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id
end
