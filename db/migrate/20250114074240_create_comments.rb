class CreateComments < ActiveRecord::Migration[8.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.string :display_name

      t.timestamps
    end
  end
end
