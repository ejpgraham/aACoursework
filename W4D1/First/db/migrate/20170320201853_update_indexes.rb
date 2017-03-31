class UpdateIndexes < ActiveRecord::Migration[5.0]
  def down
    remove_index :contacts, :contact_id
  end

  def up
    add_index :contacts, [:user_id, :email], unique: true
  end
end
