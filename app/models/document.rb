class Document < ActiveRecord::Base

  def self.create_from_hash(hash)
    document = Document.find_by(title: hash['title'])
    if document
      # 保存されたtimestampより日付が最新なら
      if document.file_timestamp < Date.parse(hash['timestamp'])
        # 更新
        document.update(
          file_name: hash['file_name'],
          doc_num: hash['doc_num'],
          title: hash['title'],
          student_num: hash['student_num'],
          category: hash['category'],
          file_timestamp: Date.parse(hash['timestamp'])
        )
      end
    else
      # 作成
      Document.create(
        file_name: hash['file_name'],
        doc_num: hash['doc_num'],
        title: hash['title'],
        student_num: hash['student_num'],
        category: hash['category'],
        file_timestamp: Date.parse(hash['timestamp'])
      )
    end
  end

  def self.set_student_id
    Document.where(student_id: nil).each do |document|
      student = Student.where(num: document.student_num).first
      document.update(student_id: student.id) unless student == nil
    end
  end
end
