class Api::CardsController < ApplicationController
  def update
    begin
      @card = Card.find_by(id: params[:id])

      params[:list_id] ? @card.list_id = params[:list_id] : nil
      params[:title] ? @card.title = params[:title] : nil
      params[:due_date] ? @card.due_date = params[:due_date] : nil
      params[:labels] ? @card.labels = params[:labels] : nil
      params[:description] ? @card.description = params[:description] : nil
      params[:position] ? @card.position = params[:position] : nil

      @card.save
    rescue ActiveRecord::RecordNotFound
      render_404
    end
  end

  private

  def board_params
    params.require(:card)
      .permit(:list_id, :title, :due_date, 
        # :labels => [],
         :description, :position)
  end
end


# create_table "cards", force: :cascade do |t|
#   t.bigint "list_id"
#   t.string "title"
#   t.datetime "due_date"
#   t.string "labels", default: [], array: true
#   t.text "description"
#   t.decimal "position"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["list_id"], name: "index_cards_on_list_id"
# end