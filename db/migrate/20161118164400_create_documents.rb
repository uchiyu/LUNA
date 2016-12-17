class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :file_name
      t.integer :doc_num
      t.string :title, unique: true
      t.string :student_num
      t.string :category
      t.date :file_timestamp

      t.integer :student_id

      t.timestamps null: false
    end
  end
end
