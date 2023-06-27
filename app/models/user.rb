# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    has_secure_password

    validates :session_token, presence: true, uniqueness: true 
    validates :password_digest, :first_name, :last_name, presence: true 
    validates :email, presence: true, uniqueness: true, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { in: 6..255 }, allow_nil: true

    has_many :reviews, dependent: :destroy

    has_many :cart_items, dependent: :destroy

    before_validation :ensure_session_token

    
    def self.find_by_credentials(email, password)
    
        user = User.find_by(email: email)

        if user && user.authenticate(password)
            return user
        else 
            nil
        end 
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    private

    def generate_unique_session_token
        loop do
            token = SecureRandom.base64
            break token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
