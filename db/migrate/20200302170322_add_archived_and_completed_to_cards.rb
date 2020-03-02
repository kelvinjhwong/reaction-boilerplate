class AddArchivedAndCompletedToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :archived
  end
end
