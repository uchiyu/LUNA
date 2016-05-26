class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def destroy
  end

  def create
    @user = User.new
    @user.student_id = params[:user][:student_id]
    @user.name = params[:user][:name]
    @user.password_digest = params[:user][:password]
    @user.save
    redirect_to '/users/index'
  end
end
