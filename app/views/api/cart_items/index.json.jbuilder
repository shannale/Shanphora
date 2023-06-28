@cart_items.each do |cart_item|
    json.set! cart_item.product.id do
      json.partial! 'api/cart_items/cart_item', cart_item: cart_item

      if cart_item.product.photo.attached? 
        json.photoUrl cart_item.product.photo.url
      else 
          json.product.photoUrl ""
      end 

    end

end