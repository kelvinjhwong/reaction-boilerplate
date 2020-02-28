json.merge! @list.attributes

json.cards(@list.cards) do |card|
  json.id card.id
  json.title card.title
  json.due_date card.due_date
  json.labels card.labels
  json.description card.description
  json.list_id card.list_id
  # json.list_id card.list_id
  json.position card.position
  # json.comments_count card.comments_count
end
