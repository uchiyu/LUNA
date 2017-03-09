class DocumentsController < ApplicationController
  def index
    documentData = Document.all.map { |doc| { student_num: doc.student_num, title: doc.title, doc_num: doc.doc_num, category: doc.category, visible: true } }
    searchKey = { student_num: '', title_queries: [], doc_num: '', category_queries: [] }
    @documents = { documentData: documentData, searchKey: searchKey }
  end
end
