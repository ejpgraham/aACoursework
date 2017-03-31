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
User.destroy_all

u = User.create(email: "snorlax@pokemon.com", password: "sleeping", picture: "https://pldh.net/media/dreamworld/143.png")
u2 = User.create(email: "staryu@pokemon.com", password: "impointy", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwixoM6Wz-3SAhUEwYMKHVYlDnQQjRwIBw&url=http%3A%2F%2Fleonhartopedia.wikia.com%2Fwiki%2FStaryu&psig=AFQjCNHta3BN1vyzGp01Ks2QmAta9x525g&ust=1490392178455125")
b1 = Band.create(name: "Maroon 5")
a1 = Album.create(name: "We Are Marooned", album_type: "Live", band_id: b1.id)
a2 = Album.create(name: "Too Many of Us", album_type: "Studio", band_id: b1.id)
t1 = Track.create(name: "Despair", track_type: "regular", album_id: a1.id)
t2 = Track.create(name: "Ugh", track_type: "regular", album_id: a1.id)
t3 = Track.create(name: "Overboard", track_type: "regular", album_id: a2.id)
t4 = Track.create(name: "Need Food", track_type: "regular", album_id: a2.id)
end
