class Card < ActiveRecord::Base
  belongs_to :list
  delegate :board_id, to: :list

  def attributes
    super.merge('board_id' => board_id)
  end

  has_many :comments, dependent: :destroy
end
