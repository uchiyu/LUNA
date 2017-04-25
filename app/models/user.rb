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

  after_update do
    old_value = changed_attributes
    @student = Student.find_by(num: old_value["student_num"] || self.student_num, name: old_value["name"] || self.name)
    @student.update(num: self.student_num, name: self.name)
  end
end
