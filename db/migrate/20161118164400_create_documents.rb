class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :file_name
      t.integer :doc_num
      t.string :title
      t.string :stundent_num
      t.string :category
      t.date :file_timestamp

      t.timestamps null: false
    end
  end
end
