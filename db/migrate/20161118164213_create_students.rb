class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :num, unique: true
      t.string :name
      t.string :password
      t.boolean :is_admin, default: false

      t.timestamps null: false
    end
  end
end
