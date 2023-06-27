json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :created_at, :updated_at
end

# json.cart_items do 
#     @user.cart_items.each do |cart_item|
#         json.set! cart_item.id do
#             json.partial! 'api/cart_items/cart_item', cart_item: cart_item
#         end
#     end 
# end 
