class EditIndex < ActiveRecord::Migration[5.0]
  def down
    remove_index :contact_shares, :user_id
    remove_index :contact_shares, :contact_id
  end
end
