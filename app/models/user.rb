class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def email_required?
      false
  end

  def email_changed?
      false
  end

  after_create do
    Student.create(num: self.student_num, name: self.name)
  end

  before_update do
    @student = Student.find_by(num: self.student_num, name: self.name)
  end
  after_update do
    @student.update(num: self.student_num, name: self.name)
  end
end
