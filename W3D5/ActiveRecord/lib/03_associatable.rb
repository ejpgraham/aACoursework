require_relative '02_searchable'
require 'active_support/inflector'
require 'byebug'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )


  def model_class
    @class_name.constantize
    # ... what model objects expecting to get back
  end

  def table_name
    @class_name.underscore + "s"
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @primary_key = options[:primary_key] ||= :id
    @foreign_key = options[:foreign_key] ||= "#{name}_id".to_sym
    @class_name = options[:class_name] ||= name.to_s.camelcase
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @primary_key = options[:primary_key] ||= :id
    @foreign_key = options[:foreign_key] ||= "#{self_class_name.downcase}_id".to_sym
    @class_name = options[:class_name] ||= name.to_s.camelcase.singularize
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})

    options = BelongsToOptions.new(name, options)

    define_method(name) do
      val = self.send(options.foreign_key)
      target_model_class = options.model_class
      target_model_class.where((options.primary_key) => val).first
    end


  end

  def has_many(name, options = {})


    # define_method(name) do
    #   val = self.send(options.foreign_key)
    #   target_model_class = options.model_class
    #   target_model_class.where((options.primary_key) => val)
    # end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end

end

class SQLObject
  extend Associatable
  # Mixin Associatable here...
end
