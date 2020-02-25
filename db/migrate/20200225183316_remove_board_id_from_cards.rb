class RemoveBoardIdFromCards < ActiveRecord::Migration[6.0]
  def change
    remove_column :cards, :board_id
    remove_column :cards, :comments_count
  end
end
