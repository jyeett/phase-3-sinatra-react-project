class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/attendees" do
    Attendee.all.to_json
  end

  get "/events" do
    Event.all.to_json
  end

  get "/events/:id" do
    Event.all.find(params[:id]).to_json(include: :presenter)
  end

  get "/presenters" do
    Presenter.all.to_json
  end
  get "/users" do
    User.all.to_json
  end

  post "/events" do
    Event.create(
      title: params[:title],
      time: params[:time],
      image: params[:image],
      details: params[:details],
      user_id: params[:user_id]
    ).to_json
  end

  post "/presenters" do
    Presenter.create(
      name: params[:name],
      email: params[:email],
      event_id: params[:event_id]
    ).to_json
  end

  delete "/events/:id" do
    Event.find(params[:id]).delete
  end
  

end
