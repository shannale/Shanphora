
json.set! @product.id do 
    json.partial! 'api/products/product', product: @product
end
# photos go here


#create reviews key