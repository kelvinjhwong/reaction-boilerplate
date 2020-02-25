# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all

board1 = Board.create({title: "First board"})
board2 = Board.create({title: "Second board"})

list1 = List.create({title: "First list", board_id: 1})

card1 = Card.create({title: "First card", list: list1})

# '{
#   "id": 1,
#   "title": "Web dev",
#   "created_at": "2017-10-04T05:57:02.777Z",
#   "updated_at": "2017-10-04T05:57:02.777Z",
#   "lists": [
#     {
#       "id": 3,
#       "title": "CSS",
#       "board_id": 1,
#       "created_at": "2017-10-04T06:53:39.302Z",
#       "updated_at": "2017-10-04T06:53:39.302Z",
#       "position": 65535.0,
#       "cards": [
#         {
#           "id": 7,
#           "title": "1",
#           "due_date": null,
#           "labels": [
#             "red",
#             "purple"
#           ],
#           "description": "Selectors",
#           "list_id": 3,
#           "board_id": 1,
#           "position": 65535.0,
#           "comments_count": 0
#         }
#       ]
#     }
#   ]
# }'
