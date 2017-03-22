class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  #remember this:
  validates :password_digest, presence: { message: "Not valid password" }
  validates :session_token, presence: true, uniqueness: true
  #remember this:
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    #remember this:
    self.save!
    self.session_token
  end

  def self.generate_session_token
    #remember this:
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
