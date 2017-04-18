# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  id: 1,
  student_num: "s13t200",
  name: "吉良吉影",
  password: 'hogehoge'
)

User.create(
  id: 2,
  student_num: "s12t200",
  name: "ディオ・ブランドー",
  password: 'mogemoge'
)

Document.create(
  file_name: "s13t200-196609.pptx",
  doc_num: 196609,
  title: "吉良吉影 誕生",
  student_num: "s13t200",
  category: "制作実習",
  file_timestamp: Date.new(1966, 9, 30),
  student_id: 1,
)

Document.create(
  file_name: "s13t200-199907.pptx",
  doc_num: 199907,
  title: "吉良吉影 命日",
  student_num: "s13t200",
  category: "企業研修",
  file_timestamp: Date.new(1999, 7, 1),
  student_id: 1,
)

Document.create(
  file_name: "s12t200-186701.pptx",
  doc_num: 196609,
  title: "ディオ爆誕",
  student_num: "s12t200",
  category: "自己紹介",
  file_timestamp: Date.new(1867, 1, 1),
  student_id: 2,
)

Document.create(
  file_name: "s12t200-1988.pptx",
  doc_num: 198802,
  title: "このディオが!!",
  student_num: "s12t200",
  category: "学生総括",
  file_timestamp: Date.new(1988, 2, 3),
  student_id: 2,
)
