json.partial! 'api/cart_items/cart_item', cart_item: @cart_item

if @cart_item.product.photo.attached? 
    json.photoUrl @cart_item.product.photo.url
else 
      json.product.photoUrl ""
end 