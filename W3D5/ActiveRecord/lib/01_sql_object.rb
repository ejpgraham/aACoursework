require_relative 'db_connection'
require 'active_support/inflector'
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
        @attributes[column]
      end

      define_method("#{column}=") do |param|
        @attributes[column] = param
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


  # @columns =

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    @attributes ||= Hash.new{|h,k| h[k] = nil}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
