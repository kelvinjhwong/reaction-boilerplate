class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    @error = 'We could not find a list with this id.'
    render '/shared/error', status: :not_found
  end

  def create
    list = List.find(params[:list_id])

    if card_params[:title].empty?
      raise ActionController::ParameterMissing.new('Missing title')
    end

    @card = Card.new(card_params.merge(list_id: params[:list_id]))

    if @card.save
      render :create, status: :created
    end

  rescue ActiveRecord::RecordNotFound
    @error = 'A list cannot be found with this list_id.'
    render '/shared/error', status: :not_found
  rescue ActionController::ParameterMissing
    @error = 'A title is required to create a card.'
    render '/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])

    update_card_params[:list_id] ? @card.list_id = update_card_params[:list_id] : nil
    update_card_params[:title] ? @card.title = update_card_params[:title] : nil
    update_card_params[:due_date] ? @card.due_date = update_card_params[:due_date] : nil
    update_card_params[:labels] ? @card.labels = update_card_params[:labels] : nil
    update_card_params[:description] ? @card.description = update_card_params[:description] : nil
    update_card_params[:position] ? @card.position = update_card_params[:position] : nil

    if @card.save
      render :update
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'A card cannot be found with this id.'
    render 'shared/error', status: :not_found
  rescue ActionController::ParameterMissing
    @error = "Invalid data provided: must specify a card and at least one attribute to update"
    render 'shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end

  def update_card_params
    params.require(:card).permit(
      :title, :list_id, :position, :description, :archived, :due_date, :completed, :labels
    )
  end
end
