class Api::CommentsController < ApplicationController
  def create
    card = Card.find(params[:card_id])

    if comment_params[:text].empty?
      raise ActionController::ParameterMissing.new('Missing comment text')
    end

    @comment = Comment.new(comment_params.merge(card_id: params[:card_id]))

    if @comment.save
      render :create, status: :created
    end

  rescue ActiveRecord::RecordNotFound
    @error = 'A card cannot be found with this card_id.'
    render '/shared/error', status: :not_found
  rescue ActionController::ParameterMissing
    @error = 'Text is required to create a comment.'
    render '/shared/error', status: :unprocessable_entity
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end