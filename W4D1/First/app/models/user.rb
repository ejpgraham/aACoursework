# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true

  has_many :made_contact,
    class_name: 'Contact',
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy

  has_many :received_contacts,
    class_name: 'ContactShare',
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy

    #ppl that have been shared to this person
  has_many :shared_contacts,
    through: :received_contacts,
    source: :contact

  has_many :second_level_contact_connections,
    through: :made_contact,
    source: :contact_shares,
    dependent: :destroy
end
