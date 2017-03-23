# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

Band.destroy_all
Album.destroy_all
Track.destroy_all

b1 = Band.create(name: "Earth")
a1 = Album.create(name: "Emergence", album_type: "Live", band_id: b1.id)
a2 = Album.create(name: "Rebirth", album_type: "Studio", band_id: b1.id)
t1 = Track.create(name: "Mankey", track_type: "regular", album_id: a1.id)
t2 = Track.create(name: "Diglet", track_type: "regular", album_id: a1.id)
t3 = Track.create(name: "Dugtrio", track_type: "regular", album_id: a2.id)
t4 = Track.create(name: "Sandslash", track_type: "regular", album_id: a2.id)
end
