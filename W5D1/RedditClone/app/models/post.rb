class Post < ApplicationRecord
  validates :title, :author, :subs, presence: true

  has_many :post_subs,
    class_name: 'PostSub',
    primary_key: :id,
    foreign_key: :post_id,
    dependent: :destroy,
    inverse_of: :post

  has_many :subs,
    through: :post_subs,
    source: :sub

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  has_many :comments

end
