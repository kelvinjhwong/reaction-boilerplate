# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
Card.destroy_all

board1 = Board.create(title: "First board")

list1 = List.create(title: "List 1", board: board1)
list2 = List.create(title: "List 2", board: board1)

card1 = Card.create(title: "Card 1", list: list1, due_date: Time.now, description: "I like this card")
card2 = Card.create(title: "Card 2", list: list1, due_date: Time.now, description: "I dislike this card")

card3 = Card.create(title: "Card 3", list: list2, due_date: Time.now, description: "this is a cool card")
card4 = Card.create(title: "Card 4", list: list2, due_date: Time.now, description: "this is a great card")
card5 = Card.create(title: "Card 5", list: list2, due_date: Time.now, description: "this is a fabulous card")

comment1_1 = Comment.create(text: "Comment for Card 1", card: card1)
comment1_2 = Comment.create(text: "Another comment for Card 1", card: card1)

comment2_1 = Comment.create(text: "Card 2 also deserves a comment", card: card2)