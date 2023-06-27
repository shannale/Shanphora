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

    charlotte_bronzer = Product.create!(
      name: 'Beautiful Skin Sun-Kissed Glow Cream Bronzer',
      price: 58,
      category: 'Cheek',
      brand: 'Charlotte Tilbury',
      description: 'A 16-hour wear cream bronzer in 4 beautiful sun-kissed shades for face and body that blurs skin, hydrates with hyaluronic acid, and is sweatproof.'
      )
    charlotte_bronzer_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek6.jpg")
    charlotte_bronzer.photo.attach(io: charlotte_bronzer_attachment, filename: 'charlotte_bronzer')

    natasha_palette = Product.create!(
          name: 'Glam Eyeshadow Palette',
          price: 69,
          category: 'Eyes',
          brand: 'Natasha Denona',
          description: 'An everyday palette that creates super-dramatic smokey eyes as well as a variety of natural and extreme glam looks.'
          )
    natasha_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye10.jpg")
    natasha_palette.photo.attach(io: natasha_palette_attachment, filename: 'natasha_palette')

    patrick_blush = Product.create!(
      name: 'Major Headlines Double-Take Crème & Powder Blush',
      price: 36,
      category: 'Cheek',
      brand: 'PATRICK TA',
      description: 'A compact with two complementary blush formulas that give you full, bold color—guaranteed to turn heads.'
      )
    patrick_blush_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek1.jpg")
    patrick_blush.photo.attach(io: patrick_blush_attachment, filename: 'patrick_blush')

    tower_28_lip = Product.create!(
      name: 'ShineOn Lip Jelly Non-StickyGloss',
      price: 16,
      category: 'Lips',
      brand: 'Tower 28 Beauty',
      description: 'A bestselling, non-sticky, moisturizing gloss for soft, shiny lips.'
      )
      tower_28_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip2.jpg")
      tower_28_lip.photo.attach(io: tower_28_lip_attachment, filename: 'tower_28_lip')
    
    abh_palette = Product.create!(
      name: 'Soft Glam Eyeshadow Palette',
      price: 45,
      category: 'Eyes',
      brand: 'Anastasia Beverly Hills',
      description: 'An everyday to night palette with 14 shades, including essential mattes and glam shimmer finishes.'
      )
    abh_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye6.jpg")
    abh_palette.photo.attach(io: abh_palette_attachment, filename: 'abh_palette')

    ysl_lip = Product.create!(
      name: 'Candy Glaze Lip Gloss Stick',
      price: 39,
      category: 'Lips',
      brand: 'Yves Saint Laurent',
      description: 'The shine of a gloss with nourishment of a balm. A luxurious lip gloss stick with vitamin E and hyaluronic acid for medium coverage and lasting shine.'
      )
      ysl_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip3.jpg")
      ysl_lip.photo.attach(io: ysl_lip_attachment, filename: 'ysl_lip')

    nars_bronzer = Product.create!(
      name: 'Mini Laguna Bronzer Powder Talc-Free',
      price: 19,
      category: 'Cheek',
      brand: 'NARS',
      description: 'An iconic powder bronzer in nine, talc-free shades that creates instant warmth and a long-wearing natural looking glow.'
      )
    nars_bronzer_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek8.jpg")
      nars_bronzer.photo.attach(io: nars_bronzer_attachment, filename: 'nars_bronzer')

    tarte_lip = Product.create!(
      name: 'Maracuja Juicy Lip Balm',
      price: 24,
      category: 'Lips',
      brand: 'tarte',
      description: 'A nurturing, glossy, lip oil that protects and enhances the lips, bringing out their natural color.'
      )
      tarte_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip4.jpg")
      tarte_lip.photo.attach(io: tarte_lip_attachment, filename: 'tarte_lip')

    dior_backstage_palette = Product.create!(
      name: 'BACKSTAGE Eyeshadow Palette',
      price: 52,
      category: 'Eyes',
      brand: 'Dior',
      description: 'An all-in-one eyeshadow and primer palette with one primer and eight blendable shades in matte and shimmer finishes.'
      )
    dior_backstage_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye8.jpg")
    dior_backstage_palette.photo.attach(io: dior_backstage_palette_attachment, filename: 'dior_backstage_palette')


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

    fenty_plump = Product.create!(
      name: 'Gloss Bomb Heat Universal Lip Luminizer + Plumper',
      price: 26,
      category: 'Lips',
      brand: 'Fenty Beauty by Rihanna',
      description: 'A lip luminizer and plumper that delivers a hint of tint and fuller-looking lips.'
      )
      fenty_plump_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip10.jpg")
      fenty_plump.photo.attach(io: fenty_plump_attachment, filename: 'fenty_plump')

    mario_skin_perfector = Product.create!(
        name: 'SoftSculpt® Transforming Skin Perfector',
        price: 34,
        category: 'Cheek',
        brand: 'MAKEUP BY MARIO',
        description: 'A three-in-one powder to perfect, illuminate, and set makeup for a radiant glow with an airbrush effect on skin.'
        )
    mario_skin_perfector_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek7.jpg")
    mario_skin_perfector.photo.attach(io: mario_skin_perfector_attachment, filename: 'mario_skin_perfector')

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

    grande_lip = Product.create!(
      name: 'GrandeLIPS Hydrating Lip Plumper Gloss',
      price: 27,
      category: 'Lips',
      brand: 'Grande Cosmetics',
      description: 'A high-gloss, volumizing lip plumper infused with a nurturing cocktail of Volulip™ and hyaluronic acid for immediate and long-term hydrating benefits.'
      )
      grande_lip_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip7.jpg")
      grande_lip.photo.attach(io: grande_lip_attachment, filename: 'grande_lip')

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

      rare_beauty_cream_blush = Product.create!(
        name: 'Stay Vulnerable Melting Cream Blush',
        price: 22,
        category: 'Cheek',
        brand: 'Rare Beauty by Selena Gomez',
        description: 'A breakthrough, mistake-proof, liquid-like cream blush that melts into a second skin for the most natural-looking wash of soft-focus color.'
        )
    rare_beauty_cream_blush_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek5.jpg")
    rare_beauty_cream_blush.photo.attach(io: rare_beauty_cream_blush_attachment, filename: 'rare_beauty_cream_blush')

      naked_palette = Product.create!(
          name: 'Mini Naked3 Eyeshadow Palette',
          price: 33,
          category: 'Eyes',
          brand: 'Urban Decay',
          description: 'A mini vegan eyeshadow palette that is inspired by the fan-favorite Naked3 Palette and features six all-new universally flattering rosy-neutral eyeshadows.'
          )
      naked_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye7.jpg")
      naked_palette.photo.attach(io: naked_palette_attachment, filename: 'naked_palette')

      too_faced_palette = Product.create!(
          name: 'Born This Way The Natural Nudes Eyeshadow Palette',
          price: 52,
          category: 'Eyes',
          brand: 'Too Faced',
          description: 'A palette of modern nude shades inspired by the beautiful nuances of real skin tones.'
          )
      too_faced_palette_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Eye+Category/eye9.jpg")
      too_faced_palette.photo.attach(io: too_faced_palette_attachment, filename: 'too_faced_palette')

      charlotte_blush = Product.create!(
          name: 'Matte Beauty Blush Wands',
          price: 42,
          category: 'Cheek',
          brand: 'Charlotte Tilbury',
          description: 'A highly pigmented matte, liquid blush for a fresh, flushed look to revive your complexion. Inspired by Charlotte’s best-selling beauty light wands, dot and blend to apply.'
          )
      charlotte_blush_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek2.jpg")
      charlotte_blush.photo.attach(io: charlotte_blush_attachment, filename: 'charlotte_blush')

      benefit_highlighter = Product.create!(
          name: 'Cookie and Tickle Powder Highlighters',
          price: 35,
          category: 'Cheek',
          brand: 'Benefit Cosmetics',
          description: 'A silky-soft, superfine powder highlighter.'
          )
      benefit_highlighter_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek3.jpg")
      benefit_highlighter.photo.attach(io: benefit_highlighter_attachment, filename: 'benefit_highlighter')

      dior_blush = Product.create!(
          name: 'Rosy Glow Blush',
          price: 40,
          category: 'Cheek',
          brand: 'Dior',
          description: 'A secret weapon to create the appearance of naturally rosy cheeks for a fresh, glowy effect.'
          )
      dior_blush_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek4.jpg")
      dior_blush.photo.attach(io: dior_blush_attachment, filename: 'dior_blush')

      milk_cream_bronze_stick = Product.create!(
          name: 'Matte Cream Bronzer Stick',
          price: 24,
          category: 'Cheek',
          brand: 'MILK MAKEUP',
          description: 'An award-winning cream bronzer stick that builds and blends effortlessly to create sunkissed warmth with a natural-looking finish in seconds.'
          )
      milk_cream_bronze_stick_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek9.jpg")
      milk_cream_bronze_stick.photo.attach(io: milk_cream_bronze_stick_attachment, filename: 'milk_cream_bronze_stick')

      dior_plump = Product.create!(
        name: 'Dior Addict Lip Maximizer Plumping Gloss',
        price: 40,
        category: 'Lips',
        brand: 'Dior',
        description: 'The iconic Dior Addict Lip Maximizer plumping lip gloss gets a refresh with a new 90% natural-origin formula, a reimagined case and updated shades.'
        )
        dior_plump_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Lip+Category/lip9.jpg")
        dior_plump.photo.attach(io: dior_plump_attachment, filename: 'dior_plump')

      benefit_liquid_highlighter = Product.create!(
          name: 'High Beam Satin Pink Liquid Highlighter',
          price: 21,
          category: 'Cheek',
          brand: 'Benefit Cosmetics',
          description: 'A satiny-pink liquid highlighter that accents cheek and brow bones for a dewy glow.'
          )
      benefit_liquid_highlighter_attachment = URI.open("https://shaphora-seeds.s3.us-west-1.amazonaws.com/Cheek+Category/cheek10.jpg")
      benefit_liquid_highlighter.photo.attach(io: benefit_liquid_highlighter_attachment, filename: 'benefit_liquid_highlighter')


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
