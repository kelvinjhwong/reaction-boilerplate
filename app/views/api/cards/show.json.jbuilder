json.merge! @card.attributes

json.comments(@card.comments) do |comment|
  json.merge! comment.attributes
end

json.comments_count @card.comments.count

json.actions []
