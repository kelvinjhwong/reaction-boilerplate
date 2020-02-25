class AddBoardIdToCards < ActiveRecord::Migration[6.0]
  def change
    change_table :cards do |t|
      t.belongs_to :board
    end
  end
end
