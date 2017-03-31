require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  subject(:user) { User.new(username: "Bob Bobberson", password: 'JBeebs') }

  describe 'validation' do
      it { should validate_presence_of(:username) }
      # QUESTION: how to do uniqueness? need something in database?
      it { should validate_presence_of(:password_digest) }
      it { should validate_presence_of(:session_token) }

      # it { should validate_uniqueness_of(:username) }
      # it { should validate_uniqueness_of(:session_token) }

      it { should validate_length_of(:password).is_at_least(6) }

      it "creates a password digest when a password is given" do
        expect(user.nil?).to be false
        expect(user.password_digest).to_not be_empty
      end
  end

  describe '::find_by_credentials' do
    before { user.save! }
    it 'should return user with given credentials' do
      expect(
        User.find_by_credentials(
          "Bob Bobberson",
          "JBeebs"
        )
      ).to eq(user)
    end
  end

end
