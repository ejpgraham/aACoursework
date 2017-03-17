require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    questionized_keys =  params.keys.map{|name|name.to_s + "= ?"}.join(" AND ")
    results = DBConnection.execute(<<-SQL, params.values)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        #{questionized_keys}
    SQL

    self.parse_all(results)
  end
end

class SQLObject
  extend Searchable #extend adds class methods, not instance methods like includes
end


# haskell_cats = Cat.where(:name => "Haskell", :color => "calico")
# SELECT
#   *
# FROM
#   cats
# WHERE
#   name = ? AND color = ?

#
# DBConnection.execute(<<-SQL, vals)
#   INSERT INTO
#   #{self.class.table_name} (#{col_names})
#   VALUES
#   (#{question_marks})
# SQL
