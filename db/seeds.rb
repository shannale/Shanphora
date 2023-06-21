# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# can't rails db:seed
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user
    User.create!(
      email: 'demo@user.io', 
      first_name: 'demo',
      last_name: '1',
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        first_name: Faker::Internet.unique.username(specifier: 3),
        last_name: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    Product.create!(
      name: 'Soft Pinch Tinted Lip Oil', 
      brand: 'Rare Beauty by Selena Gomez',
      description: 'An innovative gel-to-oil formula that starts glossy and leaves lips tinted while staying comfortable--never sticky--all day.',
      category: 'Lips',
      price: 20,
      images: "https://www.sephora.com/productimages/sku/s2640159-main-zoom.jpg?imwidth=250"
    )
  
    puts "Done!"

  end