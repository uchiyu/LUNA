class StudentsController < ApplicationController
  def index
    @students = Student.all.map { |elem| { name: elem.name, student_number: elem.student_number } }
  end
end
