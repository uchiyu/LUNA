class DocumentsController < ApplicationController
  def index
    @documents = Document.all.map { |doc| { student_num: doc.student_num, title: doc.title, doc_num: doc.doc_num, category: doc.category } }
    @documents = { defaultData: @documents, stateData: @documents }
  end
end
