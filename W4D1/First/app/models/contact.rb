# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  email      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: {scope: :email}
  validates :email, :name, presence:true

  #nancy belongs to Bob
  belongs_to :owner,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  #contact_shares means Nancy has been shared to a bunch of ppl
  has_many :contact_shares,
    class_name: 'ContactShare',
    foreign_key: :contact_id,
    primary_key: :id

  has_many :shared_users,
    through: :contact_shares,
    source: :shared_with
end
