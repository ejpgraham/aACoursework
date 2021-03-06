require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new users page" do
      get :new, user: {}

      expect(response).to render_template("new")
      expect(response).to have_http_status(200)
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "redirects to new user page" do
        post :create, user: { username: "blahblah", password: "abc"  }
        expect(response).to render_template :new
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects to index page" do
        post :create, user: { username: "jimmyjim", password: "123456" }
        expect(response).to redirect_to user_url(User.last.id)
      end
    end
  end
end
