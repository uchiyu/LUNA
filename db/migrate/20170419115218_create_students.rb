class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :num
      t.string :name

      t.timestamps null: false
    end
    add_index :students, [:num], unique: true
  end
end
