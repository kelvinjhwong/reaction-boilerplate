class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.belongs_to :list

      t.string :title
      t.datetime :due_date
      t.string :labels, array: true, default: [], nil: false
      t.text :description
      t.decimal :position
      t.integer :comments_count

      t.timestamps
    end
  end
end
