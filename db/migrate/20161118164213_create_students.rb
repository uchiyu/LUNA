class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :student_number
      t.string :name
      t.string :password
      t.bool :is_admin

      t.timestamps null: false
    end
  end
end
