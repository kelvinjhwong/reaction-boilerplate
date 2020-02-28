class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  # def update
  #   begin
  #     @card = Card.find_by(id: params[:id])

  #     params[:list_id] ? @card.list_id = params[:list_id] : nil
  #     params[:title] ? @card.title = params[:title] : nil
  #     params[:due_date] ? @card.due_date = params[:due_date] : nil
  #     params[:labels] ? @card.labels = params[:labels] : nil
  #     params[:description] ? @card.description = params[:description] : nil
  #     params[:position] ? @card.position = params[:position] : nil

  #     @card.save
  #   rescue ActiveRecord::RecordNotFound
  #     render_404
  #   end
  # end

  private

  def list_params
    params.require(:list).permit(:board_id, :title, :position)
  end
end