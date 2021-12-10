class CreateEventAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.belongs_to :event
      t.belongs_to :attendee
    end
  end
end
