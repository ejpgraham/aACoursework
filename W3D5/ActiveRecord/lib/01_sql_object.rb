require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject


  def self.columns
    @columns ||= DBConnection.execute2(<<-SQL)
    SELECT
     *
    FROM
     #{self.table_name}
    SQL

    @columns.first.map(&:to_sym)
  end

  def self.finalize!

    self.columns.each do |column| #each column here is a symbol
      define_method(column) do
        attributes[column]
      end

      define_method("#{column}=") do |param|
        attributes[column] = param
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= self.name.tableize
    # .sub(/(?=[A-Z])/, '_')
  end




  def self.all
    results = DBConnection.execute(<<-SQL)
    SELECT
     *
    FROM
     #{self.table_name}
    SQL

    # QUESTION: normally all returns a relation right? what is the difference between this and a list
    self.parse_all(results)
  end

  def self.parse_all(results)
    final = []
    results.each do |result|
      holder = {}
      result.each { |k,v| holder[k.to_sym] = v }
      final << self.new(holder)
    end
    final
  end

  def self.find(id)
    results = DBConnection.execute(<<-SQL, id)
    SELECT
     *
    FROM
     #{self.table_name}
    WHERE
      id = ?
    SQL

    self.parse_all(results).first
  end

  def initialize(params = {})
    # QUESTION: if you raise an error part way through this each, is any part of the object initialized?
    params.each do |key, value|
      raise "unknown attribute '#{key}'" unless self.class.columns.include?(key)
      self.send("#{key}=", value)
    end
  end

  def attributes
    @attributes ||= Hash.new{|h,k| h[k] = nil}
  end

  def attribute_values
    # I wrote a SQLObject#attribute_values method that returns an array of the values for each attribute. I did this by calling Array#map on SQLObject::columns, calling send on the instance to get the value.

    self.class.columns.map{|k| self.send(k.to_sym) }
  end

  def insert
    cols = self.class.columns.drop(1)
    col_names = cols.join(",")
    question_marks = (["?"] * cols.length).join(",")
    vals = attribute_values.drop(1)

    DBConnection.execute(<<-SQL, vals)
      INSERT INTO
      #{self.class.table_name} (#{col_names})
      VALUES
      (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id

  end

  def update
    cols = self.class.columns.drop(1)
    col_names = cols.map{|name|name.to_s + "= ?"}.join(",")
    vals = attribute_values.rotate

    DBConnection.execute(<<-SQL, vals)
      UPDATE
        #{self.class.table_name}
      SET
        #{col_names}
      WHERE
        id = ?
    SQL
  end

  def save
    self.id.nil? ? insert : update
  end
end
