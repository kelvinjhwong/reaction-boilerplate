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

  def update
    begin
      @list = List.find_by(id: params[:id])

      list_params[:board_id] ? @list.board_id = list_params[:board_id] : nil
      list_params[:title] ? @list.title = list_params[:title] : nil
      list_params[:position] ? @list.position = list_params[:position] : nil

      @list.save
    rescue ActiveRecord::RecordNotFound
      render_404
    end
  end

  private

  def list_params
    params.require(:list).permit(:board_id, :title, :position)
  end
end