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
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
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

    pat_lip = Product.create!(
        name: 'SatinAllure™ Lipstick',
        price: 30,
        category: 'Lips',
        brand: 'PAT McGRATH LABS',
        description: 'A modernized, satin lipstick that veils lips in weightless, silky-smooth color with a luminous, dewy finish.'
        )
      pat_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip11.jpg")
      pat_lip.photo.attach(io: pat_lip_attachment, filename: 'pat_lip')

    mario_palette = Product.create!(
        name: 'Master Mattes™ Eyeshadow Palette',
        price: 50,
        category: 'Eyes',
        brand: 'MAKEUP BY MARIO',
        description: 'A universal must-have matte palette formulated to be easily buildable so that it can go from natural to dramatic without causing fallout.'
        )
      mario_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye1.jpg")
      mario_palette.photo.attach(io: mario_palette_attachment, filename: 'mario_palette')

    sephora_palette = Product.create!(
        name: 'Color Shifter Mini Eyeshadow Palette',
        price: 10,
        category: 'Eyes',
        brand: 'SEPHORA COLLECTION',
        description: 'A collection of highly pigmented mini eyeshadow palettes that offer up endless combinations of layered looks.'
        )
        sephora_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye2.jpg")
        sephora_palette.photo.attach(io: sephora_palette_attachment, filename: 'sephora_palette')

    kaja_palette = Product.create!(
          name: 'Eye Bento Bouncy Eyeshadow Trio',
          price: 26,
          category: 'Eyes',
          brand: 'Kaja',
          description: 'A stacked, creamy, powder eyeshadow in curated trios of shimmers or combinations of matte and shimmer shades.'
          )
      kaja_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye3.jpg")
      kaja_palette.photo.attach(io: kaja_palette_attachment, filename: 'kaja_palette')

    tarte_palette = Product.create!(
          name: 'Tartelette™ In Bloom Clay Eyeshadow Palette',
          price: 45,
          category: 'Eyes',
          brand: 'tarte',
          description: 'A universal must-have matte palette formulated to be easily buildable so that it can go from natural to dramatic without causing fallout.'
          )
      tarte_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye4.jpg")
      tarte_palette.photo.attach(io: tarte_palette_attachment, filename: 'tarte_palette')

      mini_tarte = Product.create!(
          name: 'Mini tartelette™ fresh picked Amazonian clay eyeshadow palette',
          price: 25,
          category: 'Eyes',
          brand: 'tarte',
          description: 'A fresh and flirty pocket-size palette that is packed with everyday neutral shades that are anything but basic.'
          )
      mini_tarte_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye5.jpg")
      mini_tarte.photo.attach(io: mini_tarte_attachment, filename: 'mini_tarte')

      abh_palette = Product.create!(
          name: 'Soft Glam Eyeshadow Palette',
          price: 45,
          category: 'Eyes',
          brand: 'Anastasia Beverly Hills',
          description: 'An everyday to night palette with 14 shades, including essential mattes and glam shimmer finishes.'
          )
      abh_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye6.jpg")
      abh_palette.photo.attach(io: abh_palette_attachment, filename: 'abh_palette')

      naked_palette = Product.create!(
          name: 'Mini Naked3 Eyeshadow Palette',
          price: 33,
          category: 'Eyes',
          brand: 'Urban Decay',
          description: 'A mini vegan eyeshadow palette that is inspired by the fan-favorite Naked3 Palette and features six all-new universally flattering rosy-neutral eyeshadows.'
          )
      naked_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye7.jpg")
      naked_palette.photo.attach(io: naked_palette_attachment, filename: 'naked_palette')

      dior_backstage_palette = Product.create!(
          name: 'BACKSTAGE Eyeshadow Palette',
          price: 52,
          category: 'Eyes',
          brand: 'Dior',
          description: 'An all-in-one eyeshadow and primer palette with one primer and eight blendable shades in matte and shimmer finishes.'
          )
      dior_backstage_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye8.jpg")
      dior_backstage_palette.photo.attach(io: dior_backstage_palette_attachment, filename: 'dior_backstage_palette')

      too_faced_palette = Product.create!(
          name: 'Born This Way The Natural Nudes Eyeshadow Palette',
          price: 52,
          category: 'Eyes',
          brand: 'Too Faced',
          description: 'A palette of modern nude shades inspired by the beautiful nuances of real skin tones.'
          )
      too_faced_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye9.jpg")
      too_faced_palette.photo.attach(io: too_faced_palette_attachment, filename: 'too_faced_palette')

      natasha_palette = Product.create!(
          name: 'Glam Eyeshadow Palette',
          price: 69,
          category: 'Eyes',
          brand: 'Natasha Denona',
          description: 'An everyday palette that creates super-dramatic smokey eyes as well as a variety of natural and extreme glam looks.'
          )
      natasha_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye10.jpg")
      natasha_palette.photo.attach(io: natasha_palette_attachment, filename: 'natasha_palette')

  
    puts "Done!"
