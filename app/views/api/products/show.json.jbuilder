
json.product do 
    json.partial! 'api/products/product', product: @product
end
# photos go here

json.reviews do 
    @product.reviews.each do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end 
    end 
end 
#create reviews key