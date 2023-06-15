class User < ApplicationRecord
    validates :session_token, presence: true, uniqueness: true 
    validates :password_digest, :first_name, :last_name, presence: true 
    validates :email, presence: true, uniqueness: true, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { in: 6..255 }, allow_nil: true
end
