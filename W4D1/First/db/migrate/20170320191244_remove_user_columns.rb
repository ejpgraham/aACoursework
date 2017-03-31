class RemoveUserColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :name
    remove_column :users, :email
    add_column :users, :username, :string
  end

  def up
    change_column_null :users, :username, false
  end
end
