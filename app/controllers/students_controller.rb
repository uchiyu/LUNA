class StudentsController < ApplicationController
  def index
    @students = Student.all
    add_student unless params[:student_id].blank? and params[:name].blank?
  end

  def create
    @student = Student.new
    @student.student_id = params[:student_id]
    @student.name = params[:name]
    @student.save
    redirect_to action: 'index'
  end

  def destroy
    @student = Student.find_by(id: params[:id])
    @student.destroy
    redirect_to action: 'index'
  end
end
