class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render :index
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render :create, status: :created
    else
      @error = @board.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    render json: '{
            "id": 1,
            "title": "Web dev",
            "created_at": "2017-10-04T05:57:02.777Z",
            "updated_at": "2017-10-04T05:57:02.777Z",
            "lists": [
              {
                "id": 3,
                "title": "CSS",
                "board_id": 1,
                "created_at": "2017-10-04T06:53:39.302Z",
                "updated_at": "2017-10-04T06:53:39.302Z",
                "position": 65535.0,
                "cards": [
                  {
                    "id": 7,
                    "title": "1",
                    "due_date": null,
                    "labels": [
                      "red",
                      "purple"
                    ],
                    "description": "Selectors",
                    "list_id": 3,
                    "board_id": 1,
                    "position": 65535.0,
                    "comments_count": 0
                  }
                ]
              }
            ]
          }'
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end
end