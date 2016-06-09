class StudentsController < ApplicationController
  def index
    @students = Student.all
    add_student unless params[:student_id].blank? and params[:name].blank?
  end

  def add_student
    @student = Student.new
    @student.student_id = params[:student_id]
    @student.name = params[:name]
    @student.save
    render
  end
end
