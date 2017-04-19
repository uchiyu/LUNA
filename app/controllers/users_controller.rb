class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(post_params)
    if @user.save
      flash[:notice] = "Successfully created User"
      redirect_to "/user_admin"
    else
      flash[:notice] = "Failed created User"
      render :action => 'new'
    end
  end

  private
  
  def post_params
    params.require(:user).permit( :student_num, :name, :password, :password_contirmation )
  end
end
