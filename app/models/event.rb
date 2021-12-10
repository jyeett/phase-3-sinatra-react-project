class Event < ActiveRecord::Base
   has_one :presenter
   has_many :lists
   has_many :attendees, through: :lists
   belongs_to :user

   def get_attendees
    self.attendees
   end
end