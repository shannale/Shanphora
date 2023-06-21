json.product do 
    json.partial! 'api/products/product', product: @product
    # photos go here
end

#create reviews key