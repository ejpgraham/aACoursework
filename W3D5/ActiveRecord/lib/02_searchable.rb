require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    # ...
  end
end

class SQLObject
  # Mixin Searchable here...
end


haskell_cats = Cat.where(:name => "Haskell", :color => "calico")
# SELECT
#   *
# FROM
#   cats
# WHERE
#   name = ? AND color = ?
