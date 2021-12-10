class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :time
      t.string :image
      t.string :details
      t.belongs_to :user
    end
  end
end
