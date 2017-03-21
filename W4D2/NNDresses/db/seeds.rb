# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  Cat.destroy_all
  c1 = Cat.create('birth_date' => '2012-01-01', 'color' => 'black', 'name' => 'Mollycat', 'sex' => 'F')
  c2 = Cat.create('birth_date' => '2011-01-01', 'color' => 'white', 'name' => 'Pollycat', 'sex' => 'F')
  c3 = Cat.create('birth_date' => '2009-01-01', 'color' => 'brown', 'name' => 'Darrencat', 'sex' => 'M')
  CatRentalRequest.destroy_all
  r1 = CatRentalRequest.create('cat_id' => c1.id, 'start_date' => '2018-01-01', 'end_date' => '2018-01-07', 'status' => 'APPROVED')
  r2 = CatRentalRequest.create('cat_id' => c2.id, 'start_date' => '2018-01-02', 'end_date' => '2018-01-10')
  r3 = CatRentalRequest.create('cat_id' => c3.id, 'start_date' => '2018-01-01', 'end_date' => '2018-01-07')
end
