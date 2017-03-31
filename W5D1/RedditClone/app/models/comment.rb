class Comment < ApplicationRecord
  validates :content, :author, :post, presence: true

  belongs_to :post

  belongs_to :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :parent_comment,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :parent_comment_id,
    optional: true

  has_many :child_comments,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :parent_comment_id
end
