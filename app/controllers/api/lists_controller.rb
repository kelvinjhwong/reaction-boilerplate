class Api::ListsController < ApplicationController
  def create
    board = Board.find(params[:board_id])
    @list = List.new(list_params.merge(board: board))

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'shared/error', status: :unprocessable_entity
  rescue ActiveRecord::RecordNotFound
    render_404
  end

  def update
    begin
      @list = List.find_by(id: params[:id])

      # params[:board_id] ? @list.board_id = params[:board_id] : nil
      # list_params[:title] ? @list.title = list_params[:title] : nil
      # list_params[:position] ? @list.position = list_params[:position] : nil

      if (@list.update(list_params))
        render :update
      else
        @error = @list.errors.full_messages.join(', ')
        render 'api/shared/error', status: :unprocessable_entity
      end
    rescue ActiveRecord::RecordNotFound
      render_404
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :position)
  end
end