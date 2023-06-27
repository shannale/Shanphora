# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  brand       :string           not null
#  category    :string           not null
#  description :text             not null
#  images      :string
#  name        :string           not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_products_on_brand     (brand)
#  index_products_on_category  (category)
#  index_products_on_name      (name) UNIQUE
#
class Product < ApplicationRecord
    validates :brand, :category, :description, :name, :price, presence: true
    validates :name, uniqueness: true

    has_one_attached :photo

    has_many :reviews

    has_many :cart_items

end
