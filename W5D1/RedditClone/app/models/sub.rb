class Sub < ApplicationRecord
  validates :title, :description, :moderator, presence: true

  belongs_to :moderator,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :moderator_id

  has_many :post_subs,
    class_name: 'PostSub',
    primary_key: :id,
    foreign_key: :sub_id
    # dependent: :destroy,
    # inverse_of: :sub

  has_many :posts,
    through: :post_subs,
    source: :post
end
