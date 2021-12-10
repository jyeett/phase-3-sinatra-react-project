class Attendee < ActiveRecord::Base
    has_many :lists
    has_many :events, through: :lists
end