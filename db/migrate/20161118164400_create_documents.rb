class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :file_name
      t.integer :number
      t.string :title
      t.string :category
      t.date :date
      t.integer :student_id

      t.timestamps null: false
    end
  end
end
