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
    Review.destroy_all

  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
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


  reviews = [
        ["Excellent choice!", "I absolutely adore this product! It has exceeded my expectations and has become an integral part of my daily life.", "5"],
        ["Not up to par...", "I'm unimpressed with this product. It failed to deliver the promised results, and I believe it's overpriced for what it offers.", "2"],
        ["Room for improvement", "This product is decent, but it doesn't stand out. It gets the job done, but there are superior options available in the market.", "3"],
        ["Life-changing!", "Wow, this product is a game-changer! It has completely transformed my life. I can't imagine living without it now.", "5"],
        ["Underwhelming", "I had high expectations for this product, but unfortunately, it fell short. It didn't live up to the hype and left me feeling dissatisfied.", "2"],
        ["Incredible experience!", "This is hands down the finest product I've ever used! It delivers exceptional results and is worth every penny.", "5"],
        ["Not my cup of tea", "I wouldn't recommend this product. It caused irritation and didn't provide the desired outcome.", "2"],
        ["Pretty impressive!", "I'm pleasantly surprised by this product! It's reasonably priced, effective, and has become a must-have in my beauty routine.", "4"],
        ["Average at best", "This product is just average. It fulfills its claims, but I expected more based on the reviews I read.", "3"],
        ["Unbelievable!!!", "I'm completely blown away by this product! It has surpassed all my expectations, and I can't praise it enough.", "5"],
        ["Not worth the hype", "I'm unimpressed with this product. It failed to deliver the promised results, and I believe it's overpriced for what it offers.", "2"],
        ["It gets the job done", "This product is decent, but it doesn't excel. There are better options available in the market.", "3"],
        ["I'm head over heels!", "The product exceeded my expectations. It is well-designed, durable, and performs flawlessly. Highly recommended!", "5"],
        ["Are you serious?", "I'm disappointed with the product. It arrived damaged, and the quality is subpar. It's not worth the price.", "1"],
        ["Where have you been all my life", "This is the best product I've ever purchased. It's versatile, user-friendly, and has significantly improved my daily routine.", "5"],
        ["Just okay :/", "The product didn't meet my expectations. It lacks important features and feels cheaply made. I won't be buying it again.", "2"],
        ["Surpassed my expectations", "I'm impressed with the product's performance. It's fast, efficient, and delivers outstanding results. Well worth the investment.", "5"],
        ["A regrettable purchase", "I regret buying this product. It stopped working after a few uses, and the customer support was unhelpful. Stay away!", "2"],
        ["Five stars all the way!!", "I love this product! It's stylish, functional, and enhances my productivity. Definitely a game-changer.", "5"],
        ["Highly satisfied customer!", "The product arrived on time and in perfect condition. It's exactly as described and works like a charm.", "4"],
        ["Not what I expected", "I'm unsatisfied with the product's quality. It feels flimsy and doesn't live up to its advertised features.", "2"],
        ["Great value for money", "This product is a great value for the price. It performs exceptionally well and has become an integral part of my daily routine.", "5"],
        ["Not for me", "The product didn't work as expected. It's unreliable and inconsistent. I wouldn't recommend it to others.", "2"],
        ["Perfect as a gift", "I'm extremely happy with this purchase. The product is of high quality, and the customer service was excellent.", "5"],
        ["Returning this immediately", "The product is a disappointment. It broke within days of use, and the manufacturer didn't provide adequate support.", "1"],
        ["YES! It's amazing!", "This product is a game-changer. It has simplified my life and exceeded all my expectations. I can't imagine living without it.", "5"],
        ["Elegant design", "The product's design is sleek and modern. It's a perfect blend of aesthetics and functionality. Highly recommended!", "5"],
        ["Disappointing performance", "I'm not impressed with this product. It feels cheaply made, and its performance is lackluster.", "2"],
        ["Outstanding", "This product is a must-have. It's intuitive, efficient, and has made my daily tasks much easier.", "5"],
        ["Initial disappointment", "I'm disappointed with this product. It arrived late, and the packaging was damaged. Not a good first impression.", "2"],
        ["Average performance", "I'm underwhelmed by the product's performance. It's not as effective as I had hoped and feels overpriced.", "3"],
        ["I'm in love!", "I can't imagine my life without this product. It has become an indispensable tool that I rely on every day.", "5"],
        ["Unimpressive", "The product didn't live up to the hype. It's mediocre at best and doesn't offer any standout features.", "2"],
        ["Impressively bold!", "I'm thoroughly impressed with this product. It's well-crafted, reliable, and delivers exceptional results.", "5"],
        ["Still waiting for resolution", "The product arrived missing pieces, and the manufacturer has been unresponsive. Terrible customer service.", "1"],
        ["Good performance!", "I'm satisfied with the product's performance. It does exactly what it claims and has improved my workflow.", "4"],
        ["Not worth the money!", "This product is a letdown. It's poorly designed and doesn't work as advertised. Save your money.", "1"],
        ["Highly versatile!", "I'm amazed by the product's versatility. It has exceeded my expectations and opened up new possibilities.", "5"],
        ["Overpriced", "The product is overpriced for its quality. It feels cheaply made, and I expected better durability.", "3"],
        ["Part of my daily routine!", "This product has transformed my routine. It's efficient, reliable, and has saved me a lot of time.", "5"],
        ["Disappointed purchase", "I'm disappointed with this purchase. The product arrived damaged, and the customer support has been unhelpful.", "2"],
        ["Highly satisfied!", "The product is a solid performer. It's reliable, user-friendly, and has become an integral part of my routine.", "4"]
    ]
    
    all_users = User.all 
    all_products = Product.all

    all_users.each do |user|
      all_products.each do |product|
        random_review = reviews.sample()
        
        Review.create!({
          title: random_review[0],
          comment: random_review[1],
          rating: random_review[2],
          user_id: user.id,
          product_id: product.id
        })
      end
    end
  
    puts "Done!"
