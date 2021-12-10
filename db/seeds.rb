puts "Clearing old data..."
User.destroy_all
Event.destroy_all
Attendee.destroy_all
Presenter.destroy_all
List.destroy_all

puts "🌱 Seeding spices..."

# Seed your database here

    User.create(image: Faker::Avatar.image)

5.times do 
    Event.create(
        title: Faker::Company.name,
        time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :long),
        image: Faker::Company.logo,
        details: Faker::Company.bs,
        user_id: User.ids.sample
    )
end


Presenter.create(name: Faker::Name.name, email: Faker::Internet.email, event_id: Event.first.id)
Presenter.create(name: Faker::Name.name, email: Faker::Internet.email, event_id: Event.second.id)
Presenter.create(name: Faker::Name.name, email: Faker::Internet.email, event_id: Event.third.id)
Presenter.create(name: Faker::Name.name, email: Faker::Internet.email, event_id: Event.fourth.id)
Presenter.create(name: Faker::Name.name, email: Faker::Internet.email, event_id: Event.fifth.id)


20.times do
   Attendee.create(
       name: Faker::Name.name,
       email: Faker::Internet.email,
       phone: Faker::PhoneNumber.cell_phone
   ) 
end

20.times do
    List.create(
        event_id: Event.ids.sample,
        attendee_id: Attendee.ids.sample
    )
end

puts "✅ Done seeding!"
