json.extract! product,
    :id,
    :brand,
    :category,
    :description,
    :name,
    :price,
    :images

if product.photo.attached? 
    json.photoUrl product.photo.url
else 
    json.photoUrl ""
end 


