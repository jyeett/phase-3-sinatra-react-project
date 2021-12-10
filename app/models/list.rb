class List < ActiveRecord::Base
    belongs_to :events
    belongs_to :attendees
end