# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@user = User.new
@user.student_id = 's13t200'
@user.name = 'Y.A'
@user.password = "72"
@user.save

@student = Student.new
@student.student_id = 's13t200'
@student.name = 'uchiyu'
@student.save
