class StudentsController < ApplicationController
  def index
    @students = Student.all.map { |elem| { name: elem.name, student_num: elem.num } }
  end
end
