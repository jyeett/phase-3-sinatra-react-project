class CreatePresenters < ActiveRecord::Migration[6.1]
  def change
    create_table :presenters do |t|
      t.string :name
      t.string :email
      t.belongs_to :event
    end
  end
end
