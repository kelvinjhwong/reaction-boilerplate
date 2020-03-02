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
    rescue ActionController::ParameterMissing
      @error = "Invalid data provided: must specify a card and at least one attribute to update"
      render 'api/shared/error', status: :unprocessable_entity
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