class StudentsController < ApplicationController
  def index
    @students = Student.all.map { |elem| { name: elem.name, student_num: elem.student_num } }
  end
end
