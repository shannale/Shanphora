class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false 
      t.string :brand, null: false 
      t.text :description, null: false 
      t.string :category, null: false
      t.integer :price, null: false 

      t.timestamps
    end
    add_index :products, :name, unique: true
    add_index :products, :brand
    add_index :products, :category
  end
end
