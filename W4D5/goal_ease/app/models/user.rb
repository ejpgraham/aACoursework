require 'bcrypt'
require 'byebug'
class User < ActiveRecord::Base
  validates :session_token, :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_one :session

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)

    self.save
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    return self.session_token
  end
end
