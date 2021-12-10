# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_08_191114) do

  create_table "attendees", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "time"
    t.string "image"
    t.string "details"
    t.integer "user_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "event_id"
    t.integer "attendee_id"
    t.index ["attendee_id"], name: "index_lists_on_attendee_id"
    t.index ["event_id"], name: "index_lists_on_event_id"
  end

  create_table "presenters", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "event_id"
    t.index ["event_id"], name: "index_presenters_on_event_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "image"
  end

end
