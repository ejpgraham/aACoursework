require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  scenario "has a new user page" do
    visit "/users/new"
    expect(page).to have_content("Whats up")
  end

  feature "signing up a user" do
    scenario "Signs up user successfully" do
      visit "/users/new"
      fill_in "username", with: "blahblah2"
      fill_in "password", with: "password"
      click_on "submit"

      expect(page).to have_content("show me the money")
    end

    scenario "shows username on the homepage after signup" do
      visit "/users/new"
      fill_in "username", with: "blahblah2"
      fill_in "password", with: "password"
      click_on "submit"

      expect(page).to have_content("blahblah2")
    end

  end

end

feature "logging in" do

  scenario "shows username on the homepage after login" do
    visit "/users"
    click_on "Log In"
    fill_in "username", with: "blahblah2"
    fill_in "password", with: "password"
    click_on "submit"
  end

end

feature "logging out" do

  scenario "begins with a logged out state"

  scenario "doesn't show username on the homepage after logout"

end
