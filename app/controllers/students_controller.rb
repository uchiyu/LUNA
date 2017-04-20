class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(post_params)
    if @student.save
      flash[:notice] = "Successfully created Student"
      redirect_to students_path
    else
      flash[:notice] = "Failed created Student"
      render :action => 'new'
    end
  end

  private

  def post_params
    params.require(:student).permit( :num, :name )
  end
end
