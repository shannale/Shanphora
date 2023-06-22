# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# can't rails db:seed
    require "open-uri"
  
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


    dior_lip_oil = Product.create!(
      name: 'Lip Glow Oil',
      price: 40,
      category: 'Lips',
      brand: 'Dior',
      description: 'A nurturing, glossy, lip oil that protects and enhances the lips, bringing out their natural color.'
      )
    dior_lip_oil_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip1.jpg")
    dior_lip_oil.photo.attach(io: dior_lip_oil_attachment, filename: 'dior_lip_oil')

    tower_28_lip = Product.create!(
      name: 'ShineOn Lip Jelly Non-StickyGloss',
      price: 16,
      category: 'Lips',
      brand: 'Tower 28 Beauty',
      description: 'A bestselling, non-sticky, moisturizing gloss for soft, shiny lips.'
      )
      tower_28_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip2.jpg")
      tower_28_lip.photo.attach(io: tower_28_lip_attachment, filename: 'tower_28_lip')

    ysl_lip = Product.create!(
      name: 'Candy Glaze Lip Gloss Stick',
      price: 39,
      category: 'Lips',
      brand: 'Yves Saint Laurent',
      description: 'The shine of a gloss with nourishment of a balm. A luxurious lip gloss stick with vitamin E and hyaluronic acid for medium coverage and lasting shine.'
      )
      ysl_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip3.jpg")
      ysl_lip.photo.attach(io: ysl_lip_attachment, filename: 'ysl_lip')

    tarte_lip = Product.create!(
      name: 'Maracuja Juicy Lip Balm',
      price: 24,
      category: 'Lips',
      brand: 'tarte',
      description: 'A nurturing, glossy, lip oil that protects and enhances the lips, bringing out their natural color.'
      )
      tarte_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip4.jpg")
      tarte_lip.photo.attach(io: tarte_lip_attachment, filename: 'tarte_lip')

    grande_lip = Product.create!(
      name: 'GrandeLIPS Hydrating Lip Plumper Gloss',
      price: 27,
      category: 'Lips',
      brand: 'Grande Cosmetics',
      description: 'A high-gloss, volumizing lip plumper infused with a nurturing cocktail of Volulip™ and hyaluronic acid for immediate and long-term hydrating benefits.'
      )
      grande_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip7.jpg")
      grande_lip.photo.attach(io: grande_lip_attachment, filename: 'grande_lip')


    fenty_lip = Product.create!(
      name: 'Gloss Bomb Universal Lip Luminizer',
      price: 21,
      category: 'Lips',
      brand: 'Fenty Beauty by Rihanna',
      description: 'An ultimate, gotta-have-it lip gloss with explosive shine that feels as good as it looks.'
      )
      fenty_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip5.jpg")
      fenty_lip.photo.attach(io: fenty_lip_attachment, filename: 'fenty_lip')

    rare_beauty_lip = Product.create!(
      name: 'Soft Pinch Tinted Lip Oil',
      price: 20,
      category: 'Lips',
      brand: 'Rare Beauty by Selena Gomez',
      description: 'An innovative gel-to-oil formula that starts glossy and leaves lips tinted while staying comfortable—never sticky—all day.'
      )
      rare_beauty_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip8.jpg")
      rare_beauty_lip.photo.attach(io: rare_beauty_lip_attachment, filename: 'rare_beauty_lip')
  
    dior_plump = Product.create!(
      name: 'Dior Addict Lip Maximizer Plumping Gloss',
      price: 40,
      category: 'Lips',
      brand: 'Dior',
      description: 'The iconic Dior Addict Lip Maximizer plumping lip gloss gets a refresh with a new 90% natural-origin formula, a reimagined case and updated shades.'
      )
      dior_plump_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip9.jpg")
      dior_plump.photo.attach(io: dior_plump_attachment, filename: 'dior_plump')

    fenty_plump = Product.create!(
      name: 'Gloss Bomb Heat Universal Lip Luminizer + Plumper',
      price: 26,
      category: 'Lips',
      brand: 'Fenty Beauty by Rihanna',
      description: 'A lip luminizer and plumper that delivers a hint of tint and fuller-looking lips.'
      )
      fenty_plump_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip10.jpg")
      fenty_plump.photo.attach(io: fenty_plump_attachment, filename: 'fenty_plump')
    puts "Done!"
