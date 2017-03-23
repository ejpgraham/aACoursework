# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
b1 = Band.create(name: "Earth")
a1 = Album.create(name: "Emergence", album_type: "Live", band_id: b1.id)
a2 = Album.create(name: "Rebirth", album_type: "Studio", band_id: b1.id)
end
